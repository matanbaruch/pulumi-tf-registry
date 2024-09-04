// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ObjectFirewallIdentitybasedroute extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallIdentitybasedroute resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallIdentitybasedrouteState, opts?: pulumi.CustomResourceOptions): ObjectFirewallIdentitybasedroute {
        return new ObjectFirewallIdentitybasedroute(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallIdentitybasedroute:ObjectFirewallIdentitybasedroute';

    /**
     * Returns true if the given object is an instance of ObjectFirewallIdentitybasedroute.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallIdentitybasedroute {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallIdentitybasedroute.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly comments!: pulumi.Output<string | undefined>;
    public readonly dynamicSortSubtable!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly rules!: pulumi.Output<outputs.ObjectFirewallIdentitybasedrouteRule[] | undefined>;
    public readonly scopetype!: pulumi.Output<string | undefined>;

    /**
     * Create a ObjectFirewallIdentitybasedroute resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ObjectFirewallIdentitybasedrouteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallIdentitybasedrouteArgs | ObjectFirewallIdentitybasedrouteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallIdentitybasedrouteState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["dynamicSortSubtable"] = state ? state.dynamicSortSubtable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["rules"] = state ? state.rules : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
        } else {
            const args = argsOrState as ObjectFirewallIdentitybasedrouteArgs | undefined;
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["dynamicSortSubtable"] = args ? args.dynamicSortSubtable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["rules"] = args ? args.rules : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallIdentitybasedroute.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallIdentitybasedroute resources.
 */
export interface ObjectFirewallIdentitybasedrouteState {
    adom?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallIdentitybasedrouteRule>[]>;
    scopetype?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallIdentitybasedroute resource.
 */
export interface ObjectFirewallIdentitybasedrouteArgs {
    adom?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    dynamicSortSubtable?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    rules?: pulumi.Input<pulumi.Input<inputs.ObjectFirewallIdentitybasedrouteRule>[]>;
    scopetype?: pulumi.Input<string>;
}
