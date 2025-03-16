import { computed, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useStudentStore = defineStore('students', () => {

  const students = ref(
    [
      {
        number: "001401",
        subject: "Design Works",
        client: "Carlson Limited",
        vat: "87956621",
        created: "15 Dec 2017",
        status: "Paid",
        price: "$887"
      },
      {
        number: "001402",
        subject: "UX Wireframes",
        client: "Adobe",
        vat: "87956421",
        created: "12 Apr 2017",
        status: "Pending",
        price: "$1200"
      },
      {
        number: "001403",
        subject: "New Dashboard",
        client: "Bluewolf",
        vat: "87952621",
        created: "23 Oct 2017",
        status: "Pending",
        price: "$534"
      },
      {
        number: "001404",
        subject: "Landing Page",
        client: "Salesforce",
        vat: "87953421",
        created: "2 Sep 2017",
        status: "Due in 2 Weeks",
        price: "$1500"
      },
      {
        number: "001405",
        subject: "Marketing Templates",
        client: "Printic",
        vat: "87956621",
        created: "29 Jan 2018",
        status: "Paid Today",
        price: "$648"
      },
      {
        number: "001406",
        subject: "Sales Presentation",
        client: "Tabdaq",
        vat: "87956621",
        created: "4 Feb 2018",
        status: "Due in 3 Weeks",
        price: "$300"
      },
      {
        number: "001407",
        subject: "Logo & Print",
        client: "Apple",
        vat: "87956621",
        created: "22 Mar 2018",
        status: "Paid Today",
        price: "$2500"
      },
      {
        number: "001408",
        subject: "Icons",
        client: "Tookapic",
        vat: "87956621",
        created: "13 May 2018",
        status: "Paid Today",
        price: "$940"
      },
      // Generate 100 more records with unique numbers
      ...Array.from({ length: 100 }, (_, i) => ({
        number: `00140${i + 9}`,
        subject: `Subject ${i + 1}`,
        client: `Client ${i + 1}`,
        vat: `87956${i + 1}`,
        created: `1 Jan 202${i % 10}`,
        status: ["Paid", "Pending", "Due in 2 Weeks", "Paid Today"][i % 4],
        price: `$${(i + 1) * 10}`
      }))
    ]
  );
  const loading = ref(false);
  const page = ref(1);
  const perPage = ref(10);
  const pageLengths = ref([5, 10, 20, 50, 100]);
  const totalRecords = ref(students.value.length);
  const searchValue = ref(null);
  const keys = Object.keys(students.value[0]);

  const studentsCopy = ref(students.value);


  watch(perPage, () => {
    page.value = 1;
    setPageLength(perPage.value);
  });


  const currentRecords = computed(() => {
    const start = (page.value - 1) * perPage.value;
    const end = start + perPage.value;
    return students.value.slice(start, end);
  });


  const totalPages = computed(() => Math.ceil(totalRecords.value / perPage.value));

  function setPage(value) {
    page.value = parseInt(value);
  }
  function setPageLength(length) {
    perPage.value = parseInt(length);
  }

  async function findStudent(number){
      return students.value.find((student) => student.number === number);
  }

  async function searchRecords() {
    if (!students.value.length) return;
    setPage(1);
    if (searchValue.value.trim().length <= 0){
      students.value = studentsCopy.value;
      totalRecords.value = students.value.length
      return;
    }
    const search = searchValue.value.toLowerCase();

    students.value = students.value.filter((student) =>
      keys.some((key) => student[key]?.toString().toLowerCase().includes(search))
    );
    totalRecords.value = students.value.length;
  }


  return {
    currentRecords,
    loading, page, perPage, pageLengths, totalRecords, totalPages, setPage,
    findStudent, searchValue, searchRecords
  };
});
