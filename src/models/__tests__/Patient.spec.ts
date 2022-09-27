import { assert, describe, it } from "vitest";
import Patient from "../Patient";
import PatientTag, { PatientTagSeverity } from "../PatientTag";

describe("patient", () => {
  const expected_id = "1";
  const expected_mrn = "abc";
  const expected_institution = "tet_inst";
  const expected_gender = "male";
  const expected_first_name = "first_name_value";
  const expected_last_name = "last_name_value";
  const expected_dob = new Date(1995, 4, 5);
  const expected_tags = [
    new PatientTag(PatientTagSeverity.Medium, "medium_tag"),
    new PatientTag(PatientTagSeverity.High, "high_tag"),
  ];
  const expected_time_zone = "America/Chicago";

  const test_patient = new Patient(
    expected_id,
    expected_institution,
    expected_mrn,
    expected_first_name,
    expected_last_name,
    expected_gender,
    expected_dob,
    expected_tags,
    expected_time_zone
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
