image_folder=./cspr-docs/static/image;
docs_folder=./cspr-docs/docs;
image_count=0

for entry in find $image_folder/*
do
    filename="${entry##*/}"
    image_count=$((image_count+1))
    #echo "$filename"
done
echo $image_count