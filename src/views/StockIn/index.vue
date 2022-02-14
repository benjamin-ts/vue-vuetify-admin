<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="orderNum"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>入库管理</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.InboundOrderNum"
                      label="入库单号"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.orderNum"
                      label="订单号"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.storageType"
                      label="入库类型"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.supplierCode"
                      label="供应商编号"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.supplierName"
                      label="供应商名称"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>
<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: '入库单号',
          align: 'start',
          value: 'InboundOrderNum',
        },
        { text: '订单号', value: 'orderNum' },
        { text: '入库类型', value: 'storageType' },
        { text: '供应商编号', value: 'supplierCode' },
        { text: '供应商名称', value: 'supplierName' },
        { text: '操作', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        InboundOrderNum: '',
        orderNum: 0,
        storageType: 0,
        supplierCode: 0,
        supplierName: 0,
      },
      defaultItem: {
        InboundOrderNum: '',
        orderNum: 0,
        storageType: 0,
        supplierCode: 0,
        supplierName: 0,
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            InboundOrderNum: 'R20219120001',
            orderNum: 159,
            storageType: 6.0,
            supplierCode: 24,
            supplierName: 4.0,
          },
          {
            InboundOrderNum: 'R20219120002',
            orderNum: 237,
            storageType: 9.0,
            supplierCode: 37,
            supplierName: 4.3,
          },
          {
            InboundOrderNum: 'R20219120003',
            orderNum: 262,
            storageType: 16.0,
            supplierCode: 23,
            supplierName: 6.0,
          },
          {
            InboundOrderNum: 'R20219120004',
            orderNum: 305,
            storageType: 3.7,
            supplierCode: 67,
            supplierName: 4.3,
          },
          {
            InboundOrderNum: 'R20219120005',
            orderNum: 356,
            storageType: 16.0,
            supplierCode: 49,
            supplierName: 3.9,
          },
          {
            InboundOrderNum: 'R20219120006',
            orderNum: 375,
            storageType: 0.0,
            supplierCode: 94,
            supplierName: 0.0,
          },
          {
            InboundOrderNum: 'R20219120007',
            orderNum: 392,
            storageType: 0.2,
            supplierCode: 98,
            supplierName: 0,
          },
          {
            InboundOrderNum: 'R20219120008',
            orderNum: 408,
            storageType: 3.2,
            supplierCode: 87,
            supplierName: 6.5,
          },
          {
            InboundOrderNum: 'R20219120009',
            orderNum: 452,
            storageType: 25.0,
            supplierCode: 51,
            supplierName: 4.9,
          },
          {
            InboundOrderNum: 'R20219120010',
            orderNum: 518,
            storageType: 26.0,
            supplierCode: 65,
            supplierName: 7,
          },
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
  }
</script>