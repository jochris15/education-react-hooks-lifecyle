# REACT LIFECYCLE

## useEffect
```js
useEffect(setup, dependecies?)
```

### effect
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

### updated
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

## Delete Data
- siapkan function untuk delete data yang menerima parameter id
- lakukan delete menggunakan axios
- untuk mendapatkan data terbaru, panggil function fetch data, atau manipulasi data di state