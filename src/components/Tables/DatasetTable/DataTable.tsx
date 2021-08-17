import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Card,
  Col,
  Button,
  CardHeader,
  CardFooter,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Row,
} from "reactstrap";
import { generateDataset } from "../../../mock-data/Mock";
// core components

import DataRow from "./DataRow";
import TableLoader from "../../Utility/Loader/TableLoader";
import { useHistory } from "react-router-dom";
import { DataSet } from "../../../util/types";

const GigTable = () => {
  let history = useHistory();
  const [data, setData] = useState<DataSet[]>([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const fetchPage = (pageNum: number) => {
    setCurrentPage(pageNum);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setData(generateDataset(5));
    }, 400);
  }, [currentPage]);

  return (
    <Row>
      <div className="col">
        <Card className="shadow">
          <CardHeader className="border-0">
            <Row className="align-items-center">
              <Col xs="8">
                <h3 className="mb-0">Your Data Sets</h3>
              </Col>
              <Col className="text-right" xs="4">
                <Button
                  color="primary"
                  onClick={() => history.push(`/admin/data-sets/new`)}
                  size="sm"
                >
                  Add Data Set
                </Button>
              </Col>
            </Row>
          </CardHeader>

          <Table className="align-items-center table-flush" responsive>
            <thead className="thead-light">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Location</th>
                <th scope="col">Storage</th>
                <th scope="col" className="text-center">
                  Created
                </th>

                <th scope="col" className="text-center">
                  Updated
                </th>
              </tr>
            </thead>
            <tbody className="loader-container">
              {loading ? <TableLoader colspan={"6"} /> : null}
              {data.map((item: DataSet, index: number) => {
                return <DataRow key={index} data={item} />;
              })}
            </tbody>
          </Table>
          <CardFooter className="py-4">
            <nav aria-label="...">
              <Pagination
                className="pagination justify-content-end mb-0"
                listClassName="justify-content-end mb-0"
              >
                <PaginationItem className="disabled">
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                    // tabIndex="-1"
                  >
                    <i className="fas fa-angle-left" />
                    <span className="sr-only">Previous</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className={currentPage === 1 ? "active" : ""}>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      fetchPage(1);
                    }}
                  >
                    1
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className={currentPage === 2 ? "active" : ""}>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      fetchPage(2);
                    }}
                  >
                    2 <span className="sr-only">(current)</span>
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem className={currentPage === 3 ? "active" : ""}>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => {
                      e.preventDefault();
                      fetchPage(3);
                    }}
                  >
                    3
                  </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    <i className="fas fa-angle-right" />
                    <span className="sr-only">Next</span>
                  </PaginationLink>
                </PaginationItem>
              </Pagination>
            </nav>
          </CardFooter>
        </Card>
      </div>
    </Row>
  );
};

export default GigTable;