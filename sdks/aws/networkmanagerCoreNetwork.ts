// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NetworkmanagerCoreNetwork extends pulumi.CustomResource {
    /**
     * Get an existing NetworkmanagerCoreNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkmanagerCoreNetworkState, opts?: pulumi.CustomResourceOptions): NetworkmanagerCoreNetwork {
        return new NetworkmanagerCoreNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aws:index/networkmanagerCoreNetwork:NetworkmanagerCoreNetwork';

    /**
     * Returns true if the given object is an instance of NetworkmanagerCoreNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkmanagerCoreNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkmanagerCoreNetwork.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public readonly basePolicyDocument!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly basePolicyRegion!: pulumi.Output<string | undefined>;
    public readonly basePolicyRegions!: pulumi.Output<string[] | undefined>;
    public readonly createBasePolicy!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly edges!: pulumi.Output<outputs.NetworkmanagerCoreNetworkEdge[]>;
    public readonly globalNetworkId!: pulumi.Output<string>;
    public /*out*/ readonly segments!: pulumi.Output<outputs.NetworkmanagerCoreNetworkSegment[]>;
    public /*out*/ readonly state!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly tagsAll!: pulumi.Output<{[key: string]: string}>;
    public readonly timeouts!: pulumi.Output<outputs.NetworkmanagerCoreNetworkTimeouts | undefined>;

    /**
     * Create a NetworkmanagerCoreNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkmanagerCoreNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkmanagerCoreNetworkArgs | NetworkmanagerCoreNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkmanagerCoreNetworkState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["basePolicyDocument"] = state ? state.basePolicyDocument : undefined;
            resourceInputs["basePolicyRegion"] = state ? state.basePolicyRegion : undefined;
            resourceInputs["basePolicyRegions"] = state ? state.basePolicyRegions : undefined;
            resourceInputs["createBasePolicy"] = state ? state.createBasePolicy : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["edges"] = state ? state.edges : undefined;
            resourceInputs["globalNetworkId"] = state ? state.globalNetworkId : undefined;
            resourceInputs["segments"] = state ? state.segments : undefined;
            resourceInputs["state"] = state ? state.state : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tagsAll"] = state ? state.tagsAll : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as NetworkmanagerCoreNetworkArgs | undefined;
            if ((!args || args.globalNetworkId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'globalNetworkId'");
            }
            resourceInputs["basePolicyDocument"] = args ? args.basePolicyDocument : undefined;
            resourceInputs["basePolicyRegion"] = args ? args.basePolicyRegion : undefined;
            resourceInputs["basePolicyRegions"] = args ? args.basePolicyRegions : undefined;
            resourceInputs["createBasePolicy"] = args ? args.createBasePolicy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["globalNetworkId"] = args ? args.globalNetworkId : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tagsAll"] = args ? args.tagsAll : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["edges"] = undefined /*out*/;
            resourceInputs["segments"] = undefined /*out*/;
            resourceInputs["state"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NetworkmanagerCoreNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkmanagerCoreNetwork resources.
 */
export interface NetworkmanagerCoreNetworkState {
    arn?: pulumi.Input<string>;
    basePolicyDocument?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    basePolicyRegion?: pulumi.Input<string>;
    basePolicyRegions?: pulumi.Input<pulumi.Input<string>[]>;
    createBasePolicy?: pulumi.Input<boolean>;
    createdAt?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    edges?: pulumi.Input<pulumi.Input<inputs.NetworkmanagerCoreNetworkEdge>[]>;
    globalNetworkId?: pulumi.Input<string>;
    segments?: pulumi.Input<pulumi.Input<inputs.NetworkmanagerCoreNetworkSegment>[]>;
    state?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetworkmanagerCoreNetworkTimeouts>;
}

/**
 * The set of arguments for constructing a NetworkmanagerCoreNetwork resource.
 */
export interface NetworkmanagerCoreNetworkArgs {
    basePolicyDocument?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    basePolicyRegion?: pulumi.Input<string>;
    basePolicyRegions?: pulumi.Input<pulumi.Input<string>[]>;
    createBasePolicy?: pulumi.Input<boolean>;
    description?: pulumi.Input<string>;
    globalNetworkId: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    tagsAll?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    timeouts?: pulumi.Input<inputs.NetworkmanagerCoreNetworkTimeouts>;
}
