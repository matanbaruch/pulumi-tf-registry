// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallGtpPolicyv2 extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallGtpPolicyv2 resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallGtpPolicyv2State, opts?: pulumi.CustomResourceOptions): ObjectFirewallGtpPolicyv2 {
        return new ObjectFirewallGtpPolicyv2(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallGtpPolicyv2:ObjectFirewallGtpPolicyv2';

    /**
     * Returns true if the given object is an instance of ObjectFirewallGtpPolicyv2.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallGtpPolicyv2 {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallGtpPolicyv2.__pulumiType;
    }

    public readonly action!: pulumi.Output<string | undefined>;
    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly apnSelModes!: pulumi.Output<string[]>;
    public readonly apnmember!: pulumi.Output<string | undefined>;
    public readonly fosid!: pulumi.Output<number | undefined>;
    public readonly gtp!: pulumi.Output<string>;
    public readonly imsiPrefix!: pulumi.Output<string | undefined>;
    public readonly maxApnRestriction!: pulumi.Output<string | undefined>;
    public readonly mei!: pulumi.Output<string | undefined>;
    public readonly messages!: pulumi.Output<string[]>;
    public readonly msisdnPrefix!: pulumi.Output<string | undefined>;
    public readonly ratTypes!: pulumi.Output<string[]>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly ulis!: pulumi.Output<string[]>;

    /**
     * Create a ObjectFirewallGtpPolicyv2 resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallGtpPolicyv2Args, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallGtpPolicyv2Args | ObjectFirewallGtpPolicyv2State, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallGtpPolicyv2State | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["apnSelModes"] = state ? state.apnSelModes : undefined;
            resourceInputs["apnmember"] = state ? state.apnmember : undefined;
            resourceInputs["fosid"] = state ? state.fosid : undefined;
            resourceInputs["gtp"] = state ? state.gtp : undefined;
            resourceInputs["imsiPrefix"] = state ? state.imsiPrefix : undefined;
            resourceInputs["maxApnRestriction"] = state ? state.maxApnRestriction : undefined;
            resourceInputs["mei"] = state ? state.mei : undefined;
            resourceInputs["messages"] = state ? state.messages : undefined;
            resourceInputs["msisdnPrefix"] = state ? state.msisdnPrefix : undefined;
            resourceInputs["ratTypes"] = state ? state.ratTypes : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["ulis"] = state ? state.ulis : undefined;
        } else {
            const args = argsOrState as ObjectFirewallGtpPolicyv2Args | undefined;
            if ((!args || args.gtp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'gtp'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["apnSelModes"] = args ? args.apnSelModes : undefined;
            resourceInputs["apnmember"] = args ? args.apnmember : undefined;
            resourceInputs["fosid"] = args ? args.fosid : undefined;
            resourceInputs["gtp"] = args ? args.gtp : undefined;
            resourceInputs["imsiPrefix"] = args ? args.imsiPrefix : undefined;
            resourceInputs["maxApnRestriction"] = args ? args.maxApnRestriction : undefined;
            resourceInputs["mei"] = args ? args.mei : undefined;
            resourceInputs["messages"] = args ? args.messages : undefined;
            resourceInputs["msisdnPrefix"] = args ? args.msisdnPrefix : undefined;
            resourceInputs["ratTypes"] = args ? args.ratTypes : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["ulis"] = args ? args.ulis : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallGtpPolicyv2.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallGtpPolicyv2 resources.
 */
export interface ObjectFirewallGtpPolicyv2State {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    apnSelModes?: pulumi.Input<pulumi.Input<string>[]>;
    apnmember?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    gtp?: pulumi.Input<string>;
    imsiPrefix?: pulumi.Input<string>;
    maxApnRestriction?: pulumi.Input<string>;
    mei?: pulumi.Input<string>;
    messages?: pulumi.Input<pulumi.Input<string>[]>;
    msisdnPrefix?: pulumi.Input<string>;
    ratTypes?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
    ulis?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a ObjectFirewallGtpPolicyv2 resource.
 */
export interface ObjectFirewallGtpPolicyv2Args {
    action?: pulumi.Input<string>;
    adom?: pulumi.Input<string>;
    apnSelModes?: pulumi.Input<pulumi.Input<string>[]>;
    apnmember?: pulumi.Input<string>;
    fosid?: pulumi.Input<number>;
    gtp: pulumi.Input<string>;
    imsiPrefix?: pulumi.Input<string>;
    maxApnRestriction?: pulumi.Input<string>;
    mei?: pulumi.Input<string>;
    messages?: pulumi.Input<pulumi.Input<string>[]>;
    msisdnPrefix?: pulumi.Input<string>;
    ratTypes?: pulumi.Input<pulumi.Input<string>[]>;
    scopetype?: pulumi.Input<string>;
    ulis?: pulumi.Input<pulumi.Input<string>[]>;
}
