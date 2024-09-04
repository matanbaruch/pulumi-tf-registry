// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class OmicsReferenceStore extends pulumi.CustomResource {
    /**
     * Get an existing OmicsReferenceStore resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: OmicsReferenceStoreState, opts?: pulumi.CustomResourceOptions): OmicsReferenceStore {
        return new OmicsReferenceStore(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/omicsReferenceStore:OmicsReferenceStore';

    /**
     * Returns true if the given object is an instance of OmicsReferenceStore.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is OmicsReferenceStore {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === OmicsReferenceStore.__pulumiType;
    }

    /**
     * The store's ARN.
     */
    public /*out*/ readonly arn!: pulumi.Output<string>;
    /**
     * When the store was created.
     */
    public /*out*/ readonly creationTime!: pulumi.Output<string>;
    /**
     * A description for the store.
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * A name for the store.
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly referenceStoreId!: pulumi.Output<string>;
    /**
     * Server-side encryption (SSE) settings for a store.
     */
    public readonly sseConfig!: pulumi.Output<outputs.OmicsReferenceStoreSseConfig>;
    public readonly tags!: pulumi.Output<{[key: string]: string}>;

    /**
     * Create a OmicsReferenceStore resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: OmicsReferenceStoreArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: OmicsReferenceStoreArgs | OmicsReferenceStoreState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as OmicsReferenceStoreState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["creationTime"] = state ? state.creationTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["referenceStoreId"] = state ? state.referenceStoreId : undefined;
            resourceInputs["sseConfig"] = state ? state.sseConfig : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as OmicsReferenceStoreArgs | undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["sseConfig"] = args ? args.sseConfig : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["creationTime"] = undefined /*out*/;
            resourceInputs["referenceStoreId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(OmicsReferenceStore.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering OmicsReferenceStore resources.
 */
export interface OmicsReferenceStoreState {
    /**
     * The store's ARN.
     */
    arn?: pulumi.Input<string>;
    /**
     * When the store was created.
     */
    creationTime?: pulumi.Input<string>;
    /**
     * A description for the store.
     */
    description?: pulumi.Input<string>;
    /**
     * A name for the store.
     */
    name?: pulumi.Input<string>;
    referenceStoreId?: pulumi.Input<string>;
    /**
     * Server-side encryption (SSE) settings for a store.
     */
    sseConfig?: pulumi.Input<inputs.OmicsReferenceStoreSseConfig>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}

/**
 * The set of arguments for constructing a OmicsReferenceStore resource.
 */
export interface OmicsReferenceStoreArgs {
    /**
     * A description for the store.
     */
    description?: pulumi.Input<string>;
    /**
     * A name for the store.
     */
    name?: pulumi.Input<string>;
    /**
     * Server-side encryption (SSE) settings for a store.
     */
    sseConfig?: pulumi.Input<inputs.OmicsReferenceStoreSseConfig>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
}
