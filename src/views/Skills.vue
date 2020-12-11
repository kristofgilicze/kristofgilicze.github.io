          <template>
                <div class="my-auto">

                    <h3>Workflow</h3>
                    <ul class="fa-ul mb-0">
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Git flow
                        </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Test Driven Development
                        </li>
                        <li>
                            <i class="fa-li fa fa-check"></i>
                            Agile Development
                        </li>
                    </ul>

                    <h3>{{ $t('languages') }} &amp; {{ $t('tools') }}</h3>
                    <ul class="list-inline dev-icons">
                        <li>
                            <i class="devicon-python-plain-wordmark"></i>
                        </li>
                        <li>
                            <i class="devicon-cplusplus-plain"></i>
                        </li>
                        <li>
                            <i class="devicon-docker-plain-wordmark"></i>
                        </li>
                        <li>
                            <i class="devicon-django-plain"></i>
                        </li>
                        <li>
                            <i class="devicon-vuejs-plain-wordmark"></i>
                        </li>
                        <li>
                            <i class="devicon-linux-plain"></i>
                        </li>
                        <li>
                            <i class="devicon-git-plain-wordmark"></i>
                        </li>
                        <li>
                            <i class="devicon-javascript-plain"></i>
                        </li>
                        <li>
                            <i class="devicon-php-plain"></i>
                        </li>
                    </ul>
                </div>
</template>

<style lang="scss">

    .dev-icons > li {
        padding: 1rem;
    }

</style>