// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DatacatalogDataAsset extends pulumi.CustomResource {
    /**
     * Get an existing DatacatalogDataAsset resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DatacatalogDataAssetState, opts?: pulumi.CustomResourceOptions): DatacatalogDataAsset {
        return new DatacatalogDataAsset(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'oci:index/datacatalogDataAsset:DatacatalogDataAsset';

    /**
     * Returns true if the given object is an instance of DatacatalogDataAsset.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DatacatalogDataAsset {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DatacatalogDataAsset.__pulumiType;
    }

    public readonly catalogId!: pulumi.Output<string>;
    public /*out*/ readonly createdById!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly displayName!: pulumi.Output<string>;
    public /*out*/ readonly externalKey!: pulumi.Output<string>;
    public /*out*/ readonly key!: pulumi.Output<string>;
    public /*out*/ readonly lifecycleDetails!: pulumi.Output<string>;
    public readonly properties!: pulumi.Output<{[key: string]: string}>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public /*out*/ readonly timeCreated!: pulumi.Output<string>;
    public /*out*/ readonly timeHarvested!: pulumi.Output<string>;
    public /*out*/ readonly timeUpdated!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.DatacatalogDataAssetTimeouts | undefined>;
    public readonly typeKey!: pulumi.Output<string>;
    public /*out*/ readonly updatedById!: pulumi.Output<string>;
    public /*out*/ readonly uri!: pulumi.Output<string>;

    /**
     * Create a DatacatalogDataAsset resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DatacatalogDataAssetArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DatacatalogDataAssetArgs | DatacatalogDataAssetState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DatacatalogDataAssetState | undefined;
            resourceInputs["catalogId"] = state ? state.catalogId : undefined;
            resourceInputs["createdById"] = state ? state.createdById : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["externalKey"] = state ? state.externalKey : undefined;
            resourceInputs["key"] = state ? state.key : undefined;
            resourceInputs["lifecycleDetails"] = state ? state.lifecycleDetails : undefined;
            resourceInputs["properties"] = state ? state.properties : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["timeCreated"] = state ? state.timeCreated : undefined;
            resourceInputs["timeHarvested"] = state ? state.timeHarvested : undefined;
            resourceInputs["timeUpdated"] = state ? state.timeUpdated : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["typeKey"] = state ? state.typeKey : undefined;
            resourceInputs["updatedById"] = state ? state.updatedById : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as DatacatalogDataAssetArgs | undefined;
            if ((!args || args.catalogId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'catalogId'");
            }
            if ((!args || args.displayName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'displayName'");
            }
            if ((!args || args.typeKey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'typeKey'");
            }
            resourceInputs["catalogId"] = args ? args.catalogId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["properties"] = args ? args.properties : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["typeKey"] = args ? args.typeKey : undefined;
            resourceInputs["createdById"] = undefined /*out*/;
            resourceInputs["externalKey"] = undefined /*out*/;
            resourceInputs["key"] = undefined /*out*/;
            resourceInputs["lifecycleDetails"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
            resourceInputs["timeCreated"] = undefined /*out*/;
            resourceInputs["timeHarvested"] = undefined /*out*/;
            resourceInputs["timeUpdated"] = undefined /*out*/;
            resourceInputs["updatedById"] = undefined /*out*/;
            resourceInputs["uri"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DatacatalogDataAsset.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DatacatalogDataAsset resources.
 */
export interface DatacatalogDataAssetState {
    catalogId?: pulumi.Input<string>;
    createdById?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    externalKey?: pulumi.Input<string>;
    key?: pulumi.Input<string>;
    lifecycleDetails?: pulumi.Input<string>;
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    state?: pulumi.Input<string>;
    timeCreated?: pulumi.Input<string>;
    timeHarvested?: pulumi.Input<string>;
    timeUpdated?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.DatacatalogDataAssetTimeouts>;
    typeKey?: pulumi.Input<string>;
    updatedById?: pulumi.Input<string>;
    uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DatacatalogDataAsset resource.
 */
export interface DatacatalogDataAssetArgs {
    catalogId: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName: pulumi.Input<string>;
    properties?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.DatacatalogDataAssetTimeouts>;
    typeKey: pulumi.Input<string>;
}
