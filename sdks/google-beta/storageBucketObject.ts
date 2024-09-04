// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class StorageBucketObject extends pulumi.CustomResource {
    /**
     * Get an existing StorageBucketObject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: StorageBucketObjectState, opts?: pulumi.CustomResourceOptions): StorageBucketObject {
        return new StorageBucketObject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/storageBucketObject:StorageBucketObject';

    /**
     * Returns true if the given object is an instance of StorageBucketObject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is StorageBucketObject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === StorageBucketObject.__pulumiType;
    }

    /**
     * The name of the containing bucket.
     */
    public readonly bucket!: pulumi.Output<string>;
    /**
     * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous
     * users, the default will be public, max-age=3600
     */
    public readonly cacheControl!: pulumi.Output<string | undefined>;
    /**
     * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view
     * the raw contents of the object, please define an output.
     */
    public readonly content!: pulumi.Output<string>;
    /**
     * Content-Disposition of the object data.
     */
    public readonly contentDisposition!: pulumi.Output<string | undefined>;
    /**
     * Content-Encoding of the object data.
     */
    public readonly contentEncoding!: pulumi.Output<string | undefined>;
    /**
     * Content-Language of the object data.
     */
    public readonly contentLanguage!: pulumi.Output<string | undefined>;
    /**
     * Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
     */
    public readonly contentType!: pulumi.Output<string>;
    /**
     * Base 64 CRC32 hash of the uploaded data.
     */
    public /*out*/ readonly crc32c!: pulumi.Output<string>;
    /**
     * Encryption key; encoded using base64.
     */
    public readonly customerEncryption!: pulumi.Output<outputs.StorageBucketObjectCustomerEncryption | undefined>;
    public readonly detectMd5hash!: pulumi.Output<string | undefined>;
    /**
     * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is
     * signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects
     * will be subject to bucket-level retention (if any).
     */
    public readonly eventBasedHold!: pulumi.Output<boolean | undefined>;
    /**
     * The content generation of this object. Used for object versioning and soft delete.
     */
    public /*out*/ readonly generation!: pulumi.Output<number>;
    /**
     * Resource name of the Cloud KMS key that will be used to encrypt the object. Overrides the object metadata's kmsKeyName
     * value, if any.
     */
    public readonly kmsKeyName!: pulumi.Output<string>;
    /**
     * Base 64 MD5 hash of the uploaded data.
     */
    public /*out*/ readonly md5hash!: pulumi.Output<string>;
    /**
     * A url reference to download this object.
     */
    public /*out*/ readonly mediaLink!: pulumi.Output<string>;
    /**
     * User-provided metadata, in key/value pairs.
     */
    public readonly metadata!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the object. If you're interpolating the name of this object, see output_name instead.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name of the object. Use this field in interpolations with google-beta.StorageObjectAcl to recreate
     * google-beta.StorageObjectAcl resources when your google-beta.StorageBucketObject is recreated.
     */
    public /*out*/ readonly outputName!: pulumi.Output<string>;
    /**
     * Object level retention configuration.
     */
    public readonly retention!: pulumi.Output<outputs.StorageBucketObjectRetention | undefined>;
    /**
     * A url reference to this object.
     */
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * A path to the data you want to upload. Must be defined if content is not.
     */
    public readonly source!: pulumi.Output<string | undefined>;
    /**
     * The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE,
     * ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.
     */
    public readonly storageClass!: pulumi.Output<string>;
    /**
     * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and
     * overwrites.
     */
    public readonly temporaryHold!: pulumi.Output<boolean | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.StorageBucketObjectTimeouts | undefined>;

    /**
     * Create a StorageBucketObject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: StorageBucketObjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: StorageBucketObjectArgs | StorageBucketObjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as StorageBucketObjectState | undefined;
            resourceInputs["bucket"] = state ? state.bucket : undefined;
            resourceInputs["cacheControl"] = state ? state.cacheControl : undefined;
            resourceInputs["content"] = state ? state.content : undefined;
            resourceInputs["contentDisposition"] = state ? state.contentDisposition : undefined;
            resourceInputs["contentEncoding"] = state ? state.contentEncoding : undefined;
            resourceInputs["contentLanguage"] = state ? state.contentLanguage : undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["crc32c"] = state ? state.crc32c : undefined;
            resourceInputs["customerEncryption"] = state ? state.customerEncryption : undefined;
            resourceInputs["detectMd5hash"] = state ? state.detectMd5hash : undefined;
            resourceInputs["eventBasedHold"] = state ? state.eventBasedHold : undefined;
            resourceInputs["generation"] = state ? state.generation : undefined;
            resourceInputs["kmsKeyName"] = state ? state.kmsKeyName : undefined;
            resourceInputs["md5hash"] = state ? state.md5hash : undefined;
            resourceInputs["mediaLink"] = state ? state.mediaLink : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["outputName"] = state ? state.outputName : undefined;
            resourceInputs["retention"] = state ? state.retention : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["source"] = state ? state.source : undefined;
            resourceInputs["storageClass"] = state ? state.storageClass : undefined;
            resourceInputs["temporaryHold"] = state ? state.temporaryHold : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as StorageBucketObjectArgs | undefined;
            if ((!args || args.bucket === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bucket'");
            }
            resourceInputs["bucket"] = args ? args.bucket : undefined;
            resourceInputs["cacheControl"] = args ? args.cacheControl : undefined;
            resourceInputs["content"] = args?.content ? pulumi.secret(args.content) : undefined;
            resourceInputs["contentDisposition"] = args ? args.contentDisposition : undefined;
            resourceInputs["contentEncoding"] = args ? args.contentEncoding : undefined;
            resourceInputs["contentLanguage"] = args ? args.contentLanguage : undefined;
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["customerEncryption"] = args ? args.customerEncryption : undefined;
            resourceInputs["detectMd5hash"] = args ? args.detectMd5hash : undefined;
            resourceInputs["eventBasedHold"] = args ? args.eventBasedHold : undefined;
            resourceInputs["kmsKeyName"] = args ? args.kmsKeyName : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["retention"] = args ? args.retention : undefined;
            resourceInputs["source"] = args ? args.source : undefined;
            resourceInputs["storageClass"] = args ? args.storageClass : undefined;
            resourceInputs["temporaryHold"] = args ? args.temporaryHold : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["crc32c"] = undefined /*out*/;
            resourceInputs["generation"] = undefined /*out*/;
            resourceInputs["md5hash"] = undefined /*out*/;
            resourceInputs["mediaLink"] = undefined /*out*/;
            resourceInputs["outputName"] = undefined /*out*/;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["content"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(StorageBucketObject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering StorageBucketObject resources.
 */
export interface StorageBucketObjectState {
    /**
     * The name of the containing bucket.
     */
    bucket?: pulumi.Input<string>;
    /**
     * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous
     * users, the default will be public, max-age=3600
     */
    cacheControl?: pulumi.Input<string>;
    /**
     * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view
     * the raw contents of the object, please define an output.
     */
    content?: pulumi.Input<string>;
    /**
     * Content-Disposition of the object data.
     */
    contentDisposition?: pulumi.Input<string>;
    /**
     * Content-Encoding of the object data.
     */
    contentEncoding?: pulumi.Input<string>;
    /**
     * Content-Language of the object data.
     */
    contentLanguage?: pulumi.Input<string>;
    /**
     * Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
     */
    contentType?: pulumi.Input<string>;
    /**
     * Base 64 CRC32 hash of the uploaded data.
     */
    crc32c?: pulumi.Input<string>;
    /**
     * Encryption key; encoded using base64.
     */
    customerEncryption?: pulumi.Input<inputs.StorageBucketObjectCustomerEncryption>;
    detectMd5hash?: pulumi.Input<string>;
    /**
     * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is
     * signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects
     * will be subject to bucket-level retention (if any).
     */
    eventBasedHold?: pulumi.Input<boolean>;
    /**
     * The content generation of this object. Used for object versioning and soft delete.
     */
    generation?: pulumi.Input<number>;
    /**
     * Resource name of the Cloud KMS key that will be used to encrypt the object. Overrides the object metadata's kmsKeyName
     * value, if any.
     */
    kmsKeyName?: pulumi.Input<string>;
    /**
     * Base 64 MD5 hash of the uploaded data.
     */
    md5hash?: pulumi.Input<string>;
    /**
     * A url reference to download this object.
     */
    mediaLink?: pulumi.Input<string>;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the object. If you're interpolating the name of this object, see output_name instead.
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the object. Use this field in interpolations with google-beta.StorageObjectAcl to recreate
     * google-beta.StorageObjectAcl resources when your google-beta.StorageBucketObject is recreated.
     */
    outputName?: pulumi.Input<string>;
    /**
     * Object level retention configuration.
     */
    retention?: pulumi.Input<inputs.StorageBucketObjectRetention>;
    /**
     * A url reference to this object.
     */
    selfLink?: pulumi.Input<string>;
    /**
     * A path to the data you want to upload. Must be defined if content is not.
     */
    source?: pulumi.Input<string>;
    /**
     * The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE,
     * ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.
     */
    storageClass?: pulumi.Input<string>;
    /**
     * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and
     * overwrites.
     */
    temporaryHold?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.StorageBucketObjectTimeouts>;
}

/**
 * The set of arguments for constructing a StorageBucketObject resource.
 */
export interface StorageBucketObjectArgs {
    /**
     * The name of the containing bucket.
     */
    bucket: pulumi.Input<string>;
    /**
     * Cache-Control directive to specify caching behavior of object data. If omitted and object is accessible to all anonymous
     * users, the default will be public, max-age=3600
     */
    cacheControl?: pulumi.Input<string>;
    /**
     * Data as string to be uploaded. Must be defined if source is not. Note: The content field is marked as sensitive. To view
     * the raw contents of the object, please define an output.
     */
    content?: pulumi.Input<string>;
    /**
     * Content-Disposition of the object data.
     */
    contentDisposition?: pulumi.Input<string>;
    /**
     * Content-Encoding of the object data.
     */
    contentEncoding?: pulumi.Input<string>;
    /**
     * Content-Language of the object data.
     */
    contentLanguage?: pulumi.Input<string>;
    /**
     * Content-Type of the object data. Defaults to "application/octet-stream" or "text/plain; charset=utf-8".
     */
    contentType?: pulumi.Input<string>;
    /**
     * Encryption key; encoded using base64.
     */
    customerEncryption?: pulumi.Input<inputs.StorageBucketObjectCustomerEncryption>;
    detectMd5hash?: pulumi.Input<string>;
    /**
     * Whether an object is under event-based hold. Event-based hold is a way to retain objects until an event occurs, which is
     * signified by the hold's release (i.e. this value is set to false). After being released (set to false), such objects
     * will be subject to bucket-level retention (if any).
     */
    eventBasedHold?: pulumi.Input<boolean>;
    /**
     * Resource name of the Cloud KMS key that will be used to encrypt the object. Overrides the object metadata's kmsKeyName
     * value, if any.
     */
    kmsKeyName?: pulumi.Input<string>;
    /**
     * User-provided metadata, in key/value pairs.
     */
    metadata?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the object. If you're interpolating the name of this object, see output_name instead.
     */
    name?: pulumi.Input<string>;
    /**
     * Object level retention configuration.
     */
    retention?: pulumi.Input<inputs.StorageBucketObjectRetention>;
    /**
     * A path to the data you want to upload. Must be defined if content is not.
     */
    source?: pulumi.Input<string>;
    /**
     * The StorageClass of the new bucket object. Supported values include: MULTI_REGIONAL, REGIONAL, NEARLINE, COLDLINE,
     * ARCHIVE. If not provided, this defaults to the bucket's default storage class or to a standard class.
     */
    storageClass?: pulumi.Input<string>;
    /**
     * Whether an object is under temporary hold. While this flag is set to true, the object is protected against deletion and
     * overwrites.
     */
    temporaryHold?: pulumi.Input<boolean>;
    timeouts?: pulumi.Input<inputs.StorageBucketObjectTimeouts>;
}
