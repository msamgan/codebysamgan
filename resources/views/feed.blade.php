<?=
'<?xml version="1.0" encoding="UTF-8"?>' . PHP_EOL
?>
<rss version="2.0">
    <channel>
        <title><![CDATA[ codebysamgan.com ]]></title>
        <link><![CDATA[ https://codebysamgan.com/feed ]]></link>
        <description><![CDATA[ Welcome to codebysamgan!. This is my blog where I write about web development and
            programming. I hope you enjoy your stay ]]>
        </description>
        <language>en</language>
        <pubDate>{{ now() }}</pubDate>
        <lastBuildDate>{{ now() }}</lastBuildDate>
        @foreach($posts as $post)
            <item>
                <title><![CDATA[{{ $post->title }}]]></title>
                <link>{{ url($post->slug) }}</link>
                <description><![CDATA[{!! $post->excerpt !!}]]></description>
                <author><![CDATA[mohammed samgan khan]]></author>
                <guid>{{ $post->id }}</guid>
                <pubDate>{{ $post->publish_date->toRssString() }}</pubDate>
            </item>
        @endforeach
    </channel>
</rss>
