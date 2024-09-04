// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EnsNetwork extends pulumi.CustomResource {
    /**
     * Get an existing EnsNetwork resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnsNetworkState, opts?: pulumi.CustomResourceOptions): EnsNetwork {
        return new EnsNetwork(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ensNetwork:EnsNetwork';

    /**
     * Returns true if the given object is an instance of EnsNetwork.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EnsNetwork {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EnsNetwork.__pulumiType;
    }

    public readonly cidrBlock!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly ensRegionId!: pulumi.Output<string>;
    public readonly networkName!: pulumi.Output<string | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EnsNetworkTimeouts | undefined>;

    /**
     * Create a EnsNetwork resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnsNetworkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnsNetworkArgs | EnsNetworkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnsNetworkState | undefined;
            resourceInputs["cidrBlock"] = state ? state.cidrBlock : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ensRegionId"] = state ? state.ensRegionId : undefined;
            resourceInputs["networkName"] = state ? state.networkName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EnsNetworkArgs | undefined;
            if ((!args || args.cidrBlock === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidrBlock'");
            }
            if ((!args || args.ensRegionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ensRegionId'");
            }
            resourceInputs["cidrBlock"] = args ? args.cidrBlock : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ensRegionId"] = args ? args.ensRegionId : undefined;
            resourceInputs["networkName"] = args ? args.networkName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EnsNetwork.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EnsNetwork resources.
 */
export interface EnsNetworkState {
    cidrBlock?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    ensRegionId?: pulumi.Input<string>;
    networkName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EnsNetworkTimeouts>;
}

/**
 * The set of arguments for constructing a EnsNetwork resource.
 */
export interface EnsNetworkArgs {
    cidrBlock: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    ensRegionId: pulumi.Input<string>;
    networkName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EnsNetworkTimeouts>;
}
