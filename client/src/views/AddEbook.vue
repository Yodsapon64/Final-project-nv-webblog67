<template>
            <v-container>
              <v-row>
                <v-col>
                  <h1>เพิ่ม Ebook</h1>
                  <v-form @submit.prevent="addEbook">
                    <v-text-field v-model="title" label="ชื่อหนังสือ" required></v-text-field>
                    <v-text-field v-model="author" label="ผู้แต่ง" required></v-text-field>
                    <v-text-field v-model="category" label="หมวดหมู่หนังสือ" required></v-text-field>
                    <v-text-field v-model="price" label="ราคา" type="number" required></v-text-field>
                    <v-btn type="submit" color="green">บันทึก</v-btn>
                  </v-form>
                </v-col>
              </v-row>
            </v-container>
          </template>
          
          <script>
          export default {
            data() {
              return {
                title: '',
                author: '',
                category: '',
                price: '',
              };
            },
            methods: {
              async addEbook() {
                await this.$store.dispatch('addEbook', {
                  title: this.title,
                  author: this.author,
                  category: this.category,
                  price: this.price,
                });
                this.$router.push('/ebooks'); // เปลี่ยนเส้นทางไปยังหน้าแสดงรายการ Ebook
              },
            },
          };
          </script>
          