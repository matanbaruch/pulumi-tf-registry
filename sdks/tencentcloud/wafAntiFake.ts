// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WafAntiFake extends pulumi.CustomResource {
    /**
     * Get an existing WafAntiFake resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WafAntiFakeState, opts?: pulumi.CustomResourceOptions): WafAntiFake {
        return new WafAntiFake(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/wafAntiFake:WafAntiFake';

    /**
     * Returns true if the given object is an instance of WafAntiFake.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WafAntiFake {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WafAntiFake.__pulumiType;
    }

    /**
     * Domain.
     */
    public readonly domain!: pulumi.Output<string>;
    /**
     * Name.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * protocol.
     */
    public /*out*/ readonly protocol!: pulumi.Output<string>;
    /**
     * rule id.
     */
    public /*out*/ readonly ruleId!: pulumi.Output<number>;
    /**
     * status. 0: Turn off rules and log switches, 1: Turn on the rule switch and Turn off the log switch; 2: Turn off the rule
     * switch and turn on the log switch;3: Turn on the log switch.
     */
    public readonly status!: pulumi.Output<number | undefined>;
    /**
     * Uri.
     */
    public readonly uri!: pulumi.Output<string>;

    /**
     * Create a WafAntiFake resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WafAntiFakeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WafAntiFakeArgs | WafAntiFakeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WafAntiFakeState | undefined;
            resourceInputs["domain"] = state ? state.domain : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["ruleId"] = state ? state.ruleId : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["uri"] = state ? state.uri : undefined;
        } else {
            const args = argsOrState as WafAntiFakeArgs | undefined;
            if ((!args || args.domain === undefined) && !opts.urn) {
                throw new Error("Missing required property 'domain'");
            }
            if ((!args || args.uri === undefined) && !opts.urn) {
                throw new Error("Missing required property 'uri'");
            }
            resourceInputs["domain"] = args ? args.domain : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["uri"] = args ? args.uri : undefined;
            resourceInputs["protocol"] = undefined /*out*/;
            resourceInputs["ruleId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WafAntiFake.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WafAntiFake resources.
 */
export interface WafAntiFakeState {
    /**
     * Domain.
     */
    domain?: pulumi.Input<string>;
    /**
     * Name.
     */
    name?: pulumi.Input<string>;
    /**
     * protocol.
     */
    protocol?: pulumi.Input<string>;
    /**
     * rule id.
     */
    ruleId?: pulumi.Input<number>;
    /**
     * status. 0: Turn off rules and log switches, 1: Turn on the rule switch and Turn off the log switch; 2: Turn off the rule
     * switch and turn on the log switch;3: Turn on the log switch.
     */
    status?: pulumi.Input<number>;
    /**
     * Uri.
     */
    uri?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WafAntiFake resource.
 */
export interface WafAntiFakeArgs {
    /**
     * Domain.
     */
    domain: pulumi.Input<string>;
    /**
     * Name.
     */
    name?: pulumi.Input<string>;
    /**
     * status. 0: Turn off rules and log switches, 1: Turn on the rule switch and Turn off the log switch; 2: Turn off the rule
     * switch and turn on the log switch;3: Turn on the log switch.
     */
    status?: pulumi.Input<number>;
    /**
     * Uri.
     */
    uri: pulumi.Input<string>;
}
