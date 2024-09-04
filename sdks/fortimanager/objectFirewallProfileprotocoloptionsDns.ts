// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ObjectFirewallProfileprotocoloptionsDns extends pulumi.CustomResource {
    /**
     * Get an existing ObjectFirewallProfileprotocoloptionsDns resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ObjectFirewallProfileprotocoloptionsDnsState, opts?: pulumi.CustomResourceOptions): ObjectFirewallProfileprotocoloptionsDns {
        return new ObjectFirewallProfileprotocoloptionsDns(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortimanager:index/objectFirewallProfileprotocoloptionsDns:ObjectFirewallProfileprotocoloptionsDns';

    /**
     * Returns true if the given object is an instance of ObjectFirewallProfileprotocoloptionsDns.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ObjectFirewallProfileprotocoloptionsDns {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ObjectFirewallProfileprotocoloptionsDns.__pulumiType;
    }

    public readonly adom!: pulumi.Output<string | undefined>;
    public readonly ports!: pulumi.Output<number[]>;
    public readonly profileProtocolOptions!: pulumi.Output<string>;
    public readonly scopetype!: pulumi.Output<string | undefined>;
    public readonly status!: pulumi.Output<string>;

    /**
     * Create a ObjectFirewallProfileprotocoloptionsDns resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ObjectFirewallProfileprotocoloptionsDnsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ObjectFirewallProfileprotocoloptionsDnsArgs | ObjectFirewallProfileprotocoloptionsDnsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ObjectFirewallProfileprotocoloptionsDnsState | undefined;
            resourceInputs["adom"] = state ? state.adom : undefined;
            resourceInputs["ports"] = state ? state.ports : undefined;
            resourceInputs["profileProtocolOptions"] = state ? state.profileProtocolOptions : undefined;
            resourceInputs["scopetype"] = state ? state.scopetype : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
        } else {
            const args = argsOrState as ObjectFirewallProfileprotocoloptionsDnsArgs | undefined;
            if ((!args || args.profileProtocolOptions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profileProtocolOptions'");
            }
            resourceInputs["adom"] = args ? args.adom : undefined;
            resourceInputs["ports"] = args ? args.ports : undefined;
            resourceInputs["profileProtocolOptions"] = args ? args.profileProtocolOptions : undefined;
            resourceInputs["scopetype"] = args ? args.scopetype : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ObjectFirewallProfileprotocoloptionsDns.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ObjectFirewallProfileprotocoloptionsDns resources.
 */
export interface ObjectFirewallProfileprotocoloptionsDnsState {
    adom?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    profileProtocolOptions?: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ObjectFirewallProfileprotocoloptionsDns resource.
 */
export interface ObjectFirewallProfileprotocoloptionsDnsArgs {
    adom?: pulumi.Input<string>;
    ports?: pulumi.Input<pulumi.Input<number>[]>;
    profileProtocolOptions: pulumi.Input<string>;
    scopetype?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
}
