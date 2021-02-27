import { useFetch } from "@hooks/use-fetch";
import { act, renderHook } from "@testing-library/react-hooks";
import axios from "axios";

jest.mock("axios");

describe("Hook: Use Fetch", () => {
  test("Render correctly", async () => {
    axios.get.mockImplementationOnce(() => Promise.resolve({ data: [] }));

    const url = "http://MY_URL";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

    await act(async () => {
      await waitForNextUpdate();
    });

    const [response, error, loading] = result.current;

    expect(loading).toBeFalsy();
    expect(error).toBeNull();
    expect(Array.isArray(response)).toBeTruthy();
  });

  test("Render con error", async () => {
    const errorMessage = "Esto es un error personalizado";

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    );

    const url = "http://MY_URL";
    const { result, waitForNextUpdate } = renderHook(() => useFetch(url));

    await act(async () => {
      await waitForNextUpdate();
    });

    const [response, error, loading] = result.current;

    expect(loading).toBeFalsy();
    expect(response).toBeNull();
    expect(error).not.toBeNull();
    expect(error.message).toBe(errorMessage);
  });
});
