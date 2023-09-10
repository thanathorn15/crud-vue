import axios from "axios";
import useStudent from '../../composables/studentApi'
import MockAdapter from "axios-mock-adapter";
import jest from "jest"



describe("useStudent", () => {
  let mockAxios;
  let {
    getAllStudent,
    getSingleStudent,
    studentData,
    error
  } = useStudent();

  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it("getAllStudent should fetch data successfully", async () => {
    const responseData = [{ id: 1, name: "Sonn" },{ id: 2, name: "Tar" },
    { id: 3, name: "mint" },{ id: 4, name: "park" },{ id: 5, name: "poo" }];

    mockAxios.onGet("http://localhost:4000/students/").reply(200, responseData);

    await getAllStudent();

    expect(studentData).toEqual(responseData);
    expect(error).toBeNull();
  });

  it("getAllStudent should handle errors", async () => {
    const errorMessage = "Error fetching data";

    mockAxios.onGet("http://localhost:4000/students/").reply(500, errorMessage);

    await getAllStudent();

    expect(studentData).toEqual([]);
    expect(error).toBe(errorMessage);
  });


  it("getSingleStudent should fetch a single student successfully", async () => {
    const responseData = { id: 1, name: "Sonn" };

    mockAxios.onGet("http://localhost:4000/students/1").reply(200, responseData);

    await getSingleStudent(1);

    expect(studentData).toEqual(responseData);
    expect(error).toBeNull();
  });

});
