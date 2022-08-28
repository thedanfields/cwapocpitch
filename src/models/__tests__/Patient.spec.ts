import { assert, describe, it } from "vitest";
import Patient from "../Patient";

describe("patient", () => {
  const expected_first_name = "first_name_value";
  const expected_last_name = "last_name_value";
  const expected_dob = new Date(1995, 4, 5);

  const test_patient = new Patient(
    expected_first_name,
    expected_last_name,
    expected_dob
  );

  it("should have a first name", () => {
    assert.equal(test_patient.first_name, expected_first_name);
  });

  it("should have a last name", () => {
    assert.equal(test_patient.first_name, expected_first_name);
  });

  it("display name should include first and last name.  with date of birth", () => {
    const expected_display_name = `${expected_last_name}, ${expected_first_name} (${expected_dob.toLocaleDateString()})`;
    assert.equal(test_patient.display_name, expected_display_name);
  });
});
