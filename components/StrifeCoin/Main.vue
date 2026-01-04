<template>
    <div class="container page-content">
        <div class="row">
            <div class="col-lg-12 col-md-12">
                <h1>{{ constants.strife_coin.name }}</h1>

                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <p>By combining the undeniable power of a personal token with generous doses of <b>futility</b>
                            and <b>self-irony</b>, {{ constants.strife_coin.symbol }} hands you the chance to become the
                            richest person in the world. Results not guaranteed.</p>

                        <p>{{ constants.strife_coin.symbol }} is a personal token built around <strong>Andrea
                                Corriga</strong> — aka <strong>AsoStrife</strong> — the one-man hype machine and
                            self-declared Alpha and Omega of this meme token.</p>

                        <p>{{ constants.strife_coin.symbol }} lives on BSC (Binance Smart Chain): decentralised,
                            deflationary, community-driven — and accompanied by every other flattering buzzword you
                            expect to see on a meme coin page.</p>

                        <h3>Why should I buy this token?</h3>
                        <ul class="list-unstyled service-list">
                            <li><i class="fas fa-check"></i> Why not?</li>
                            <li><i class="fas fa-check"></i> {{ constants.strife_coin.symbol }} is shareable, send it as
                                a gift to friends, enemies, or mysterious strangers.</li>
                            <li><i class="fas fa-check"></i> Great for short-term thrills and long-term regret, buy
                                accordingly.</li>
                            <li><i class="fas fa-check"></i> No partners, no investors. Nobody will interfere with your
                                meteoric rise to financial freedom (or your slow descent).</li>
                            <li><i class="fas fa-check"></i> Seriously, do you need a fifth reason to buy some
                                <strong>{{ constants.strife_coin.name }}</strong>?
                            </li>

                        </ul>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <table class="table table-striped table-responsive">
                            <caption>{{ constants.strife_coin.name }} ({{ constants.strife_coin.symbol }}) Information
                            </caption>
                            <tbody>
                                <tr>
                                    <th>Icon:</th>
                                    <td><img class="rounded-circle img-fluid" :src="constants.strife_coin.icon"
                                            :alt="constants.strife_coin.name" /></td>
                                </tr>
                                <tr>
                                    <th>Total Supply:</th>
                                    <td>{{ constants.strife_coin.total_supply.toLocaleString() }}
                                        {{ constants.strife_coin.symbol }}</td>
                                </tr>
                                <tr>
                                    <th>Circulating Supply:</th>
                                    <td>{{ constants.strife_coin.circulatin_supply.toLocaleString() }}
                                        {{ constants.strife_coin.symbol }}</td>
                                </tr>
                                <tr>
                                    <th>Decimals</th>
                                    <td>{{ constants.strife_coin.decimals }}</td>
                                </tr>
                                <tr>
                                    <th>Contract</th>
                                    <td>
                                        <a :href="constants.strife_coin.token_url" :title="constants.strife_coin.name"
                                            target="_blank">
                                            <small>{{ constants.strife_coin.address }}</small>
                                        </a>

                                        <!--<a class="btn float-right" data-toggle="tooltip">
                                            <i class="fas fa-copy"></i>
                                        </a>-->

                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <a class="btn btn-lg btn-block btn-pancake" :href="constants.strife_coin.pancakeswap"
                            target="_blank">
                            Buy {{ constants.strife_coin.symbol }} on Pancake Swap
                        </a>

                    </div>

                </div> <!-- /.row -->

                <div class="row mt-4">
                    <div class="col-lg-12 col-md-12">
                        <small class="mt-3"><i class="fas fa-info-circle mr-2"></i> If for some absurd reason you are
                            seriously considering buying this token, remember that this coin has no fundamental value or
                            purpose. It only exists because I wanted to have a token in the BSC (Binance Smart Chain)
                            with my name on it.</small>
                    </div>
                </div>
            </div>
        </div> <!-- /.row -->
    </div>
</template>

<script>
export default {
    name: 'Strife Coin'
}
</script>

<style scoped>
th,
td {
    font-size: 16px;
    color: #FFF;
}

.btn-pancake {
    background-color: #202945;
}

@media screen and (max-width: 576px) {

    th,
    td {
        width: 100%;
    }
}
</style>