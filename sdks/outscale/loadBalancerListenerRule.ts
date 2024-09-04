// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class LoadBalancerListenerRule extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalancerListenerRule resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalancerListenerRuleState, opts?: pulumi.CustomResourceOptions): LoadBalancerListenerRule {
        return new LoadBalancerListenerRule(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'outscale:index/loadBalancerListenerRule:LoadBalancerListenerRule';

    /**
     * Returns true if the given object is an instance of LoadBalancerListenerRule.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalancerListenerRule {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalancerListenerRule.__pulumiType;
    }

    public readonly listener!: pulumi.Output<outputs.LoadBalancerListenerRuleListener>;
    public readonly listenerRule!: pulumi.Output<outputs.LoadBalancerListenerRuleListenerRule>;
    public /*out*/ readonly requestId!: pulumi.Output<string>;
    public readonly vmIds!: pulumi.Output<string[]>;

    /**
     * Create a LoadBalancerListenerRule resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalancerListenerRuleArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalancerListenerRuleArgs | LoadBalancerListenerRuleState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadBalancerListenerRuleState | undefined;
            resourceInputs["listener"] = state ? state.listener : undefined;
            resourceInputs["listenerRule"] = state ? state.listenerRule : undefined;
            resourceInputs["requestId"] = state ? state.requestId : undefined;
            resourceInputs["vmIds"] = state ? state.vmIds : undefined;
        } else {
            const args = argsOrState as LoadBalancerListenerRuleArgs | undefined;
            if ((!args || args.listener === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listener'");
            }
            if ((!args || args.listenerRule === undefined) && !opts.urn) {
                throw new Error("Missing required property 'listenerRule'");
            }
            if ((!args || args.vmIds === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vmIds'");
            }
            resourceInputs["listener"] = args ? args.listener : undefined;
            resourceInputs["listenerRule"] = args ? args.listenerRule : undefined;
            resourceInputs["vmIds"] = args ? args.vmIds : undefined;
            resourceInputs["requestId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadBalancerListenerRule.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadBalancerListenerRule resources.
 */
export interface LoadBalancerListenerRuleState {
    listener?: pulumi.Input<inputs.LoadBalancerListenerRuleListener>;
    listenerRule?: pulumi.Input<inputs.LoadBalancerListenerRuleListenerRule>;
    requestId?: pulumi.Input<string>;
    vmIds?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a LoadBalancerListenerRule resource.
 */
export interface LoadBalancerListenerRuleArgs {
    listener: pulumi.Input<inputs.LoadBalancerListenerRuleListener>;
    listenerRule: pulumi.Input<inputs.LoadBalancerListenerRuleListenerRule>;
    vmIds: pulumi.Input<pulumi.Input<string>[]>;
}
