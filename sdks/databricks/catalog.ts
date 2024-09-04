// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Catalog extends pulumi.CustomResource {
    /**
     * Get an existing Catalog resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CatalogState, opts?: pulumi.CustomResourceOptions): Catalog {
        return new Catalog(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'databricks:index/catalog:Catalog';

    /**
     * Returns true if the given object is an instance of Catalog.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Catalog {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Catalog.__pulumiType;
    }

    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly connectionName!: pulumi.Output<string | undefined>;
    public readonly enablePredictiveOptimization!: pulumi.Output<string>;
    public readonly forceDestroy!: pulumi.Output<boolean | undefined>;
    public readonly isolationMode!: pulumi.Output<string>;
    public readonly metastoreId!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly options!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly owner!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly providerName!: pulumi.Output<string | undefined>;
    public readonly shareName!: pulumi.Output<string | undefined>;
    public readonly storageRoot!: pulumi.Output<string | undefined>;

    /**
     * Create a Catalog resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: CatalogArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CatalogArgs | CatalogState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CatalogState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["connectionName"] = state ? state.connectionName : undefined;
            resourceInputs["enablePredictiveOptimization"] = state ? state.enablePredictiveOptimization : undefined;
            resourceInputs["forceDestroy"] = state ? state.forceDestroy : undefined;
            resourceInputs["isolationMode"] = state ? state.isolationMode : undefined;
            resourceInputs["metastoreId"] = state ? state.metastoreId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["options"] = state ? state.options : undefined;
            resourceInputs["owner"] = state ? state.owner : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["providerName"] = state ? state.providerName : undefined;
            resourceInputs["shareName"] = state ? state.shareName : undefined;
            resourceInputs["storageRoot"] = state ? state.storageRoot : undefined;
        } else {
            const args = argsOrState as CatalogArgs | undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["connectionName"] = args ? args.connectionName : undefined;
            resourceInputs["enablePredictiveOptimization"] = args ? args.enablePredictiveOptimization : undefined;
            resourceInputs["forceDestroy"] = args ? args.forceDestroy : undefined;
            resourceInputs["isolationMode"] = args ? args.isolationMode : undefined;
            resourceInputs["metastoreId"] = args ? args.metastoreId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["options"] = args ? args.options : undefined;
            resourceInputs["owner"] = args ? args.owner : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["providerName"] = args ? args.providerName : undefined;
            resourceInputs["shareName"] = args ? args.shareName : undefined;
            resourceInputs["storageRoot"] = args ? args.storageRoot : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Catalog.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Catalog resources.
 */
export interface CatalogState {
    comment?: pulumi.Input<string>;
    connectionName?: pulumi.Input<string>;
    enablePredictiveOptimization?: pulumi.Input<string>;
    forceDestroy?: pulumi.Input<boolean>;
    isolationMode?: pulumi.Input<string>;
    metastoreId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    options?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    owner?: pulumi.Input<string>;
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    providerName?: pulumi.Input<string>;
    shareName?: pulumi.Input<string>;
    storageRoot?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Catalog resource.
 */
export interface CatalogArgs {
    comment?: pulumi.Input<string>;
    connectionName?: pulumi.Input<string>;
    enablePredictiveOptimization?: pulumi.Input<string>;
    forceDestroy?: pulumi.Input<boolean>;
    isolationMode?: pulumi.Input<string>;
    metastoreId?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    options?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    owner?: pulumi.Input<string>;
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    providerName?: pulumi.Input<string>;
    shareName?: pulumi.Input<string>;
    storageRoot?: pulumi.Input<string>;
}
