import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import CurrenTime from "../CurrentTime.vue";
import type { ITimeService } from "@/services/TimeService";
import { InjectionKeys } from "@/constants";

class FakeTimeService implements ITimeService {
  fakeTime: Date;
  constructor(fakeTime: Date) {
    this.fakeTime = fakeTime;
  }

  getCurrentTime(timeZone: string): Date {
    return new Date(
      this.fakeTime.toLocaleString("en-US", {
        timeZone: timeZone,
      })
    );
  }
}

describe("CurrentTime", () => {
  const utcDate = new Date(Date.UTC(2022, 5, 7, 12, 30, 10));
  it("America/New_York", () => {
    const timeService = new FakeTimeService(utcDate);
    const wrapper = mount(CurrenTime, {
      props: { timeZone: "America/New_York" },
      global: {
        provide: {
          [InjectionKeys.TimeService as symbol]: timeService,
        },
      },
    });
    expect(wrapper.text()).toContain("8:30 AM");
  });
  it("America/Los_Angeles", () => {
    const timeService = new FakeTimeService(utcDate);
    const wrapper = mount(CurrenTime, {
      props: { timeZone: "America/Los_Angeles" },
      global: {
        provide: {
          [InjectionKeys.TimeService as symbol]: timeService,
        },
      },
    });
    expect(wrapper.text()).toContain("5:30 AM");
  });
});
