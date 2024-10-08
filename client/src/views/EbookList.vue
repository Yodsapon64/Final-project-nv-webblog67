<template>
            <v-container>
              <v-row>
                <v-col>
                  <h1>รายการ Ebooks</h1>
                  <v-btn @click="addEbook" color="green">เพิ่ม Ebook</v-btn>
                  <v-divider></v-divider>
                  <v-list>
                    <v-list-item-group>
                      <v-list-item v-for="ebook in ebooks" :key="ebook.id">
                        <v-list-item-content>
                          <v-list-item-title>{{ ebook.title }}</v-list-item-title>
                          <v-list-item-subtitle>{{ ebook.author }} - {{ ebook.price }} บาท</v-list-item-subtitle>
                          <v-btn @click="editEbook(ebook.id)">แก้ไข</v-btn>
                          <v-btn @click="deleteEbook(ebook.id)" color="red">ลบ</v-btn>
                        </v-list-item-content>
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-col>
              </v-row>
            </v-container>
          </template>
          
          <script>
          export default {
            computed: {
              ebooks() {
                return this.$store.state.ebooks;
              },
            },
            methods: {
              addEbook() {
                this.$router.push('/add-ebook'); // เปลี่ยนเส้นทางไปยังหน้าเพิ่ม Ebook
              },
              editEbook(id) {
                this.$router.push(`/edit-ebook/${id}`); // เปลี่ยนเส้นทางไปยังหน้าแก้ไข Ebook
              },
              async deleteEbook(id) {
                if (confirm('คุณแน่ใจว่าจะลบ Ebook นี้?')) {
                  await this.$store.dispatch('deleteEbook', id); // เรียกใช้งาน action เพื่อลบ Ebook
                  alert('Ebook ถูกลบเรียบร้อยแล้ว');
                }
              },
            },
            mounted() {
              this.$store.dispatch('fetchAllEbooks'); // โหลด Ebooks เมื่อหน้าแสดงผล
            },
          };
          </script>
          