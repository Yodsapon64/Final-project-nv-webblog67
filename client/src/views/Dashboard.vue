<template>
            <v-container>
              <v-row>
                <v-col>
                  <h1>ยินดีต้อนรับสู่แดชบอร์ด</h1>
                  <v-btn @click="logout" color="red">ออกจากระบบ</v-btn>
                  <v-divider></v-divider>
                  <v-btn @click="fetchEbooks">โหลด Ebooks</v-btn>
                  <v-list>
                    <v-list-item-group>
                      <v-list-item v-for="ebook in ebooks" :key="ebook.id">
                        <v-list-item-content>
                          <v-list-item-title>{{ ebook.title }}</v-list-item-title>
                          <v-list-item-subtitle>{{ ebook.author }} - {{ ebook.price }} บาท</v-list-item-subtitle>
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
              logout() {
                localStorage.removeItem('token');
                this.$store.commit('setUser', null); // เคลียร์ข้อมูลผู้ใช้
                this.$router.push('/login'); // เปลี่ยนเส้นทางไปยังหน้าเข้าสู่ระบบ
              },
              fetchEbooks() {
                this.$store.dispatch('fetchAllEbooks'); // โหลด Ebooks จาก API
              },
            },
          };
          </script>
          