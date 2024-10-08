<template>
            <v-container>
              <v-row justify="center">
                <v-col cols="12" sm="8" md="6">
                  <v-card>
                    <v-card-title>เข้าสู่ระบบ</v-card-title>
                    <v-card-text>
                      <v-form @submit.prevent="login">
                        <v-text-field v-model="email" label="อีเมล" required></v-text-field>
                        <v-text-field v-model="password" label="รหัสผ่าน" type="password" required></v-text-field>
                        <v-btn type="submit" color="primary">เข้าสู่ระบบ</v-btn>
                      </v-form>
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </v-container>
          </template>
          
          <script>
          export default {
            data() {
              return {
                email: '',
                password: '',
              };
            },
            methods: {
              login() {
                this.$store.dispatch('login', { email: this.email, password: this.password })
                  .then(() => {
                    this.$router.push('/dashboard'); // เปลี่ยนเส้นทางไปยังแดชบอร์ด
                  })
                  .catch((error) => {
                    console.error('Login failed:', error);
                    alert('เข้าสู่ระบบล้มเหลว!');
                  });
              },
            },
          };
          </script>
          