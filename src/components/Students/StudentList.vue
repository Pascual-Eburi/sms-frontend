<script setup>
import ButtonActions from '@components/UI/Buttons/ButtonActions.vue'
import ActionToolbar from '@components/UI/Toolbars/ActionToolbar.vue'
import PaginationInfo from '@components/UI/Pagination/PaginationInfo.vue'
import PaginationPages from '@components/UI/Pagination/PaginationPages.vue'

import { useStudentStore } from '@/stores/students.js'
import { storeToRefs } from 'pinia'
import PageLengthSelector from '@components/UI/Pagination/PageLengthSelector.vue'
import SearchInput from '@components/UI/Inputs/SearchInput.vue'

const studentStore = useStudentStore()
const { currentRecords } = storeToRefs(studentStore)
</script>

<template>
  <div class="card relative">
    <div class="card-body border-bottom py-3">
      <div class="d-flex">
        <PageLengthSelector :store="studentStore" />
        <SearchInput :store="studentStore" />
      </div>
    </div>
    <div class="table-responsive">
      <table class="table card-table table-vcenter text-nowrap datatable">
        <thead>
          <tr>
            <th class="w-1">
              <input
                class="form-check-input m-0 align-middle"
                type="checkbox"
                aria-label="Select all invoices"
              />
            </th>
            <th class="w-1">
              No.

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="icon icon-sm icon-thick icon-2"
              >
                <path d="M6 15l6 -6l6 6"></path>
              </svg>
            </th>
            <th>Invoice Subject</th>
            <th>Client</th>
            <th>VAT No.</th>
            <th>Created</th>
            <th>Status</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="line in currentRecords" :key="line.number">
            <td>
              <input
                class="form-check-input m-0 align-middle"
                type="checkbox"
                aria-label="Select invoice"
              />
            </td>
            <td>
              <span class="text-secondary">{{ line.number }}</span>
            </td>
            <td>
              <router-link to="/students" class="text-reset" tabindex="-1">{{
                line.subject
              }}</router-link>
            </td>
            <td>
              <span class="flag flag-xs flag-country-us me-2"></span>
              {{ line.client }}
            </td>
            <td>{{ line.vat }}</td>
            <td>{{ line.created }}</td>
            <td><span class="badge bg-success me-1"></span> {{ line.status }}</td>
            <td>{{ line.price }}</td>
            <td class="text-end">
              <ButtonActions></ButtonActions>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="card-footer d-flex align-items-center">
      <PaginationInfo :store="studentStore" />
      <PaginationPages :store="studentStore" />
    </div>
    <ActionToolbar />
  </div>
</template>

<style scoped>
input:active,
input:focus,
select:active,
select:focus {
  outline: none !important;
}
</style>
