<template>
    <div>
        <div class="cover-container">
            <img src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gIoSUNDX1BST0ZJTEUAAQEAAAIYAAAAAAIQAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAAHRyWFlaAAABZAAAABRnWFlaAAABeAAAABRiWFlaAAABjAAAABRyVFJDAAABoAAAAChnVFJDAAABoAAAAChiVFJDAAABoAAAACh3dHB0AAAByAAAABRjcHJ0AAAB3AAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAFgAAAAcAHMAUgBHAEIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFhZWiAAAAAAAABvogAAOPUAAAOQWFlaIAAAAAAAAGKZAAC3hQAAGNpYWVogAAAAAAAAJKAAAA+EAAC2z3BhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABYWVogAAAAAAAA9tYAAQAAAADTLW1sdWMAAAAAAAAAAQAAAAxlblVTAAAAIAAAABwARwBvAG8AZwBsAGUAIABJAG4AYwAuACAAMgAwADEANv/bAEMAAwICAgICAwICAgMDAwMEBgQEBAQECAYGBQYJCAoKCQgJCQoMDwwKCw4LCQkNEQ0ODxAQERAKDBITEhATDxAQEP/bAEMBAwMDBAMECAQECBALCQsQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEP/AABEIAUUFFAMBIgACEQEDEQH/xAAcAAEBAQEBAQEBAQAAAAAAAAAABwYEBQIDAQj/xABIEAEAAgEDAQQGBgQLBQkAAAAAAQIDBAURBgcSITETQVFhcYEUIjKRobEVI1LBFzM2QlR0k7LR0vAWVWKU4SRDRHKDhJKi4v/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD/AGWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//Z" alt="profile-bg" class="rounded img-fluid">
        </div>
            <div class="profile-info p-4 d-flex align-items-center justify-content-between position-relative">
        </div>

<div class="d-grid gap-3 d-grid-template-1fr-19">        
        <div class="card mb-0">
            <div class="top-bg-image">
                <img src="" class="img-fluid w-100" alt="group-bg">
            </div>
            <div class="card-body text-center">
                <div class="group-icon">
                    <img src="/img/gi-1.cab43d35.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
                </div>
            <div class="group-info pt-3 pb-3">
                <h4><a href="/group-detail" class="">اسم الكتاب</a></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                        <p class="mb-0">عدد الشهادات</p>
                        <h6>600</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">فئة</p>
                        <h6>كرهت حياتي</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">نوع الكتاب</p>
                        <h6>منهجي</h6>
                    </li>
                </ul>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">اصدار الشهادة</button></div></div>


<div class="card mb-0">
            <div class="top-bg-image">
                <img src="" class="img-fluid w-100" alt="group-bg">
            </div>
            <div class="card-body text-center">
                <div class="group-icon">
                    <img src="/img/gi-1.cab43d35.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
                </div>
            <div class="group-info pt-3 pb-3">
                <h4><a href="/group-detail" class="">اسم الكتاب</a></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                        <p class="mb-0">عدد الشهادات</p>
                        <h6>600</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">فئة</p>
                        <h6>كرهت حياتي</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">نوع الكتاب</p>
                        <h6>منهجي</h6>
                    </li>
                </ul>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">اصدار الشهادة</button></div></div>


<div class="card mb-0">
            <div class="top-bg-image">
                <img src="" class="img-fluid w-100" alt="group-bg">
            </div>
            <div class="card-body text-center">
                <div class="group-icon">
                    <img src="/img/gi-1.cab43d35.jpg" alt="profile-img" class="rounded-circle img-fluid avatar-120">
                </div>
            <div class="group-info pt-3 pb-3">
                <h4><a href="/group-detail" class="">اسم الكتاب</a></h4>
                <p>Lorem Ipsum data</p>
            </div>
            <div class="group-details d-inline-block pb-3">
                <ul class="d-flex align-items-center justify-content-between list-inline m-0 p-0">
                    <li class="pe-3 ps-3">
                        <p class="mb-0">عدد الشهادات</p>
                        <h6>600</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">فئة</p>
                        <h6>كرهت حياتي</h6>
                    </li>
                    <li class="pe-3 ps-3">
                        <p class="mb-0">نوع الكتاب</p>
                        <h6>منهجي</h6>
                    </li>
                </ul>
            </div>
            <button type="submit" class="btn btn-primary d-block w-100">اصدار الشهادة</button></div></div>


</div>
              <ul class="pagination mb-0">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
    </div>
</template>

<script>
    export default {

    }
</script>

<style lang="scss" scoped>
    ul{
        margin: 10px 0 0 0 ;
        justify-content: center;
    }
</style>
