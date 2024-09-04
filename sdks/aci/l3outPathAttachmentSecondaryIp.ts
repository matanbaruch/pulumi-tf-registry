// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class L3outPathAttachmentSecondaryIp extends pulumi.CustomResource {
    /**
     * Get an existing L3outPathAttachmentSecondaryIp resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: L3outPathAttachmentSecondaryIpState, opts?: pulumi.CustomResourceOptions): L3outPathAttachmentSecondaryIp {
        return new L3outPathAttachmentSecondaryIp(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/l3outPathAttachmentSecondaryIp:L3outPathAttachmentSecondaryIp';

    /**
     * Returns true if the given object is an instance of L3outPathAttachmentSecondaryIp.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is L3outPathAttachmentSecondaryIp {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === L3outPathAttachmentSecondaryIp.__pulumiType;
    }

    public readonly addr!: pulumi.Output<string>;
    public readonly annotation!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string>;
    public readonly dhcpRelay!: pulumi.Output<string | undefined>;
    public readonly ipv6Dad!: pulumi.Output<string>;
    public readonly l3outPathAttachmentDn!: pulumi.Output<string>;
    public readonly nameAlias!: pulumi.Output<string>;

    /**
     * Create a L3outPathAttachmentSecondaryIp resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: L3outPathAttachmentSecondaryIpArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: L3outPathAttachmentSecondaryIpArgs | L3outPathAttachmentSecondaryIpState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as L3outPathAttachmentSecondaryIpState | undefined;
            resourceInputs["addr"] = state ? state.addr : undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dhcpRelay"] = state ? state.dhcpRelay : undefined;
            resourceInputs["ipv6Dad"] = state ? state.ipv6Dad : undefined;
            resourceInputs["l3outPathAttachmentDn"] = state ? state.l3outPathAttachmentDn : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
        } else {
            const args = argsOrState as L3outPathAttachmentSecondaryIpArgs | undefined;
            if ((!args || args.addr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'addr'");
            }
            if ((!args || args.l3outPathAttachmentDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'l3outPathAttachmentDn'");
            }
            resourceInputs["addr"] = args ? args.addr : undefined;
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dhcpRelay"] = args ? args.dhcpRelay : undefined;
            resourceInputs["ipv6Dad"] = args ? args.ipv6Dad : undefined;
            resourceInputs["l3outPathAttachmentDn"] = args ? args.l3outPathAttachmentDn : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(L3outPathAttachmentSecondaryIp.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering L3outPathAttachmentSecondaryIp resources.
 */
export interface L3outPathAttachmentSecondaryIpState {
    addr?: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dhcpRelay?: pulumi.Input<string>;
    ipv6Dad?: pulumi.Input<string>;
    l3outPathAttachmentDn?: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a L3outPathAttachmentSecondaryIp resource.
 */
export interface L3outPathAttachmentSecondaryIpArgs {
    addr: pulumi.Input<string>;
    annotation?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    dhcpRelay?: pulumi.Input<string>;
    ipv6Dad?: pulumi.Input<string>;
    l3outPathAttachmentDn: pulumi.Input<string>;
    nameAlias?: pulumi.Input<string>;
}
