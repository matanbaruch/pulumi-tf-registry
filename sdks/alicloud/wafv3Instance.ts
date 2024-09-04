// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Wafv3Instance extends pulumi.CustomResource {
    /**
     * Get an existing Wafv3Instance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Wafv3InstanceState, opts?: pulumi.CustomResourceOptions): Wafv3Instance {
        return new Wafv3Instance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/wafv3Instance:Wafv3Instance';

    /**
     * Returns true if the given object is an instance of Wafv3Instance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Wafv3Instance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Wafv3Instance.__pulumiType;
    }

    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public /*out*/ readonly instanceId!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.Wafv3InstanceTimeouts | undefined>;

    /**
     * Create a Wafv3Instance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: Wafv3InstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Wafv3InstanceArgs | Wafv3InstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Wafv3InstanceState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["instanceId"] = state ? state.instanceId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as Wafv3InstanceArgs | undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["instanceId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Wafv3Instance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Wafv3Instance resources.
 */
export interface Wafv3InstanceState {
    createTime?: pulumi.Input<string>;
    instanceId?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Wafv3InstanceTimeouts>;
}

/**
 * The set of arguments for constructing a Wafv3Instance resource.
 */
export interface Wafv3InstanceArgs {
    timeouts?: pulumi.Input<inputs.Wafv3InstanceTimeouts>;
}
