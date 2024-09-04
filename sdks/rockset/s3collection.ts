// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class S3Collection extends pulumi.CustomResource {
    /**
     * Get an existing S3Collection resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: S3CollectionState, opts?: pulumi.CustomResourceOptions): S3Collection {
        return new S3Collection(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rockset:index/s3Collection:S3Collection';

    /**
     * Returns true if the given object is an instance of S3Collection.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is S3Collection {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === S3Collection.__pulumiType;
    }

    /**
     * Text describing the collection.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Ingest transformation SQL query. Turns the collection into insert_only mode. When inserting data into Rockset, you can
     * transform the data by providing a single SQL query, that contains all of the desired data transformations. This is
     * referred to as the collection’s ingest transformation or, historically, its field mapping query. For more information
     * see https://rockset.com/docs/ingest-transformation/
     */
    public readonly ingestTransformation!: pulumi.Output<string | undefined>;
    /**
     * Unique identifier for the collection. Can contain alphanumeric or dash characters.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Number of seconds after which data is purged. Based on event time.
     */
    public readonly retentionSecs!: pulumi.Output<number | undefined>;
    /**
     * Defines a source for this collection.
     */
    public readonly sources!: pulumi.Output<outputs.S3CollectionSource[] | undefined>;
    /**
     * RocksDB storage compression type. Possible values: ZSTD, LZ4.
     */
    public readonly storageCompressionType!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.S3CollectionTimeouts | undefined>;
    /**
     * Wait until the collection is ready.
     */
    public readonly waitForCollection!: pulumi.Output<boolean | undefined>;
    /**
     * Wait until the collection has documents. The default is to wait for 0 documents, which means it doesn't wait.
     */
    public readonly waitForDocuments!: pulumi.Output<number | undefined>;
    /**
     * The name of the workspace.
     */
    public readonly workspace!: pulumi.Output<string>;

    /**
     * Create a S3Collection resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: S3CollectionArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: S3CollectionArgs | S3CollectionState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as S3CollectionState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ingestTransformation"] = state ? state.ingestTransformation : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["retentionSecs"] = state ? state.retentionSecs : undefined;
            resourceInputs["sources"] = state ? state.sources : undefined;
            resourceInputs["storageCompressionType"] = state ? state.storageCompressionType : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["waitForCollection"] = state ? state.waitForCollection : undefined;
            resourceInputs["waitForDocuments"] = state ? state.waitForDocuments : undefined;
            resourceInputs["workspace"] = state ? state.workspace : undefined;
        } else {
            const args = argsOrState as S3CollectionArgs | undefined;
            if ((!args || args.workspace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'workspace'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ingestTransformation"] = args ? args.ingestTransformation : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["retentionSecs"] = args ? args.retentionSecs : undefined;
            resourceInputs["sources"] = args ? args.sources : undefined;
            resourceInputs["storageCompressionType"] = args ? args.storageCompressionType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["waitForCollection"] = args ? args.waitForCollection : undefined;
            resourceInputs["waitForDocuments"] = args ? args.waitForDocuments : undefined;
            resourceInputs["workspace"] = args ? args.workspace : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(S3Collection.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering S3Collection resources.
 */
export interface S3CollectionState {
    /**
     * Text describing the collection.
     */
    description?: pulumi.Input<string>;
    /**
     * Ingest transformation SQL query. Turns the collection into insert_only mode. When inserting data into Rockset, you can
     * transform the data by providing a single SQL query, that contains all of the desired data transformations. This is
     * referred to as the collection’s ingest transformation or, historically, its field mapping query. For more information
     * see https://rockset.com/docs/ingest-transformation/
     */
    ingestTransformation?: pulumi.Input<string>;
    /**
     * Unique identifier for the collection. Can contain alphanumeric or dash characters.
     */
    name?: pulumi.Input<string>;
    /**
     * Number of seconds after which data is purged. Based on event time.
     */
    retentionSecs?: pulumi.Input<number>;
    /**
     * Defines a source for this collection.
     */
    sources?: pulumi.Input<pulumi.Input<inputs.S3CollectionSource>[]>;
    /**
     * RocksDB storage compression type. Possible values: ZSTD, LZ4.
     */
    storageCompressionType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.S3CollectionTimeouts>;
    /**
     * Wait until the collection is ready.
     */
    waitForCollection?: pulumi.Input<boolean>;
    /**
     * Wait until the collection has documents. The default is to wait for 0 documents, which means it doesn't wait.
     */
    waitForDocuments?: pulumi.Input<number>;
    /**
     * The name of the workspace.
     */
    workspace?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a S3Collection resource.
 */
export interface S3CollectionArgs {
    /**
     * Text describing the collection.
     */
    description?: pulumi.Input<string>;
    /**
     * Ingest transformation SQL query. Turns the collection into insert_only mode. When inserting data into Rockset, you can
     * transform the data by providing a single SQL query, that contains all of the desired data transformations. This is
     * referred to as the collection’s ingest transformation or, historically, its field mapping query. For more information
     * see https://rockset.com/docs/ingest-transformation/
     */
    ingestTransformation?: pulumi.Input<string>;
    /**
     * Unique identifier for the collection. Can contain alphanumeric or dash characters.
     */
    name?: pulumi.Input<string>;
    /**
     * Number of seconds after which data is purged. Based on event time.
     */
    retentionSecs?: pulumi.Input<number>;
    /**
     * Defines a source for this collection.
     */
    sources?: pulumi.Input<pulumi.Input<inputs.S3CollectionSource>[]>;
    /**
     * RocksDB storage compression type. Possible values: ZSTD, LZ4.
     */
    storageCompressionType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.S3CollectionTimeouts>;
    /**
     * Wait until the collection is ready.
     */
    waitForCollection?: pulumi.Input<boolean>;
    /**
     * Wait until the collection has documents. The default is to wait for 0 documents, which means it doesn't wait.
     */
    waitForDocuments?: pulumi.Input<number>;
    /**
     * The name of the workspace.
     */
    workspace: pulumi.Input<string>;
}
