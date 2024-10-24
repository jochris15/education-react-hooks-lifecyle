# REACT LIFECYCLE

## useEffect
useEffect adalah sebuah react hook yang memungkinkan kita untuk mengsynchronize komponen kita dengan external system

```js
useEffect(setup, dependecies?)
```
[Dokumentasi useEffect](https://react.dev/reference/react/useEffect)
### re-render
```js
useEffect(() => {
  // ini akan dijalankan setiap re-render
})
```

### mounted
```js
useEffect(() => {
  // ini akan dijalankan saat component dirender pertama kali
}, [])
```

### watcher
```js
useEffect(() => {
  // ini akan dijalankan bila ada perubahan pada dependencies
}, [count]) // ini adalah list dependecies yang akan di-watch
```

### unmounted
```js
useEffect(() => {
  return () => {
    // ini akan dijalankan saat component unmount
    // biasanya digunakan untuk clean up
  }
}, [])
```

## Fetch Data
- siapkan state data dan loading 
- siapkan function untuk fetch data menggunakan axios
- gunakan useEffect mounted untuk melakukan fetch data saat awal component di-render
- set loading menjadi true
- get data menggunakan axios
- set data menggunakan data yang didapat dari axios
- finally set loading menjadi false
- gunakan conditional rendering untuk loading
- data siap digunakan

## Login
- siapkan state untuk menampung inputan
- siapkan function untuk mengambil value dari input
- lakukan validasi inputan
- bila lolos validasi lakukan langkah selanjutnya
- siapkan function untuk handle submit form axios post
- pindah ke halaman home

## Add Data (with authentication)
- siapkan beberapa state untuk menyimpan perubahan input form
- gunakan setter di event on change per input dalam formnya, value yang digunakan untuk setter berasal dari event.target.value, agar perubahan input dapat diterima
- siapkan function untuk menambahkan data ke dalam database , jangan lupa pasang tokennya di headers
- siapkan function untuk memanggil entitas support
- gunakan useEffect mounted untuk melakukan fetch data entitas support saat awal component di-render
- pasang function untuk menambahkan data di onSubmit formnya