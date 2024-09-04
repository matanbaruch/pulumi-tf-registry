// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EbsSolutionInstance extends pulumi.CustomResource {
    /**
     * Get an existing EbsSolutionInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EbsSolutionInstanceState, opts?: pulumi.CustomResourceOptions): EbsSolutionInstance {
        return new EbsSolutionInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/ebsSolutionInstance:EbsSolutionInstance';

    /**
     * Returns true if the given object is an instance of EbsSolutionInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EbsSolutionInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EbsSolutionInstance.__pulumiType;
    }

    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly parameters!: pulumi.Output<outputs.EbsSolutionInstanceParameter[] | undefined>;
    public readonly resourceGroupId!: pulumi.Output<string>;
    public readonly solutionId!: pulumi.Output<string>;
    public readonly solutionInstanceName!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.EbsSolutionInstanceTimeouts | undefined>;

    /**
     * Create a EbsSolutionInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EbsSolutionInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EbsSolutionInstanceArgs | EbsSolutionInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EbsSolutionInstanceState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["resourceGroupId"] = state ? state.resourceGroupId : undefined;
            resourceInputs["solutionId"] = state ? state.solutionId : undefined;
            resourceInputs["solutionInstanceName"] = state ? state.solutionInstanceName : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as EbsSolutionInstanceArgs | undefined;
            if ((!args || args.solutionId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'solutionId'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceGroupId"] = args ? args.resourceGroupId : undefined;
            resourceInputs["solutionId"] = args ? args.solutionId : undefined;
            resourceInputs["solutionInstanceName"] = args ? args.solutionInstanceName : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EbsSolutionInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EbsSolutionInstance resources.
 */
export interface EbsSolutionInstanceState {
    createTime?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    parameters?: pulumi.Input<pulumi.Input<inputs.EbsSolutionInstanceParameter>[]>;
    resourceGroupId?: pulumi.Input<string>;
    solutionId?: pulumi.Input<string>;
    solutionInstanceName?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EbsSolutionInstanceTimeouts>;
}

/**
 * The set of arguments for constructing a EbsSolutionInstance resource.
 */
export interface EbsSolutionInstanceArgs {
    description?: pulumi.Input<string>;
    parameters?: pulumi.Input<pulumi.Input<inputs.EbsSolutionInstanceParameter>[]>;
    resourceGroupId?: pulumi.Input<string>;
    solutionId: pulumi.Input<string>;
    solutionInstanceName?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.EbsSolutionInstanceTimeouts>;
}
