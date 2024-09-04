// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Acl extends pulumi.CustomResource {
    /**
     * Get an existing Acl resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AclState, opts?: pulumi.CustomResourceOptions): Acl {
        return new Acl(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'netris:index/acl:Acl';

    /**
     * Returns true if the given object is an instance of Acl.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Acl {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Acl.__pulumiType;
    }

    /**
     * Permit or Deny forwarding of matched packets. Valid values are `permit` and `deny`.
     */
    public readonly action!: pulumi.Output<string>;
    /**
     * Descriptive comment, commonly used for approval workflows.
     */
    public readonly comment!: pulumi.Output<string | undefined>;
    /**
     * Destination port from. Valid values should be in range 1-65535
     */
    public readonly dstportfrom!: pulumi.Output<number | undefined>;
    /**
     * Match destination ports on a group of ports. Valid value name of ACL Port Group
     */
    public readonly dstportgroup!: pulumi.Output<string | undefined>;
    /**
     * Destination port to. Valid values should be in range 1-65535
     */
    public readonly dstportto!: pulumi.Output<number | undefined>;
    /**
     * Destination IPv4/IPv6 address. Example `0.0.0.0/0`
     */
    public readonly dstprefix!: pulumi.Output<string>;
    /**
     * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped
     * source/destination. Valid values are `0` and `1`. Default value is `1`
     */
    public readonly established!: pulumi.Output<number | undefined>;
    /**
     * Custom IPv4 ICMP code. Valid values should be in range 1-37 according to RFC 1700. Default value is `1`
     */
    public readonly icmptype!: pulumi.Output<number | undefined>;
    /**
     * Unique name for the ACL entry.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * IP protocol to match. Valid values are `all`, `ip`, `tcp`, `udp`, `icmp`, `icmpv6`.
     */
    public readonly proto!: pulumi.Output<string>;
    /**
     * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped
     * source/destination. Default value is `true`
     */
    public readonly reverse!: pulumi.Output<boolean | undefined>;
    /**
     * Source port from. Valid values should be in range 1-65535
     */
    public readonly srcportfrom!: pulumi.Output<number | undefined>;
    /**
     * Match source ports on a group of ports. Valid value name of ACL Port Group
     */
    public readonly srcportgroup!: pulumi.Output<string | undefined>;
    /**
     * Source port to. Valid values should be in range 1-65535
     */
    public readonly srcportto!: pulumi.Output<number | undefined>;
    /**
     * Source IPv4/IPv6 address. Example `192.0.2.0/24`
     */
    public readonly srcprefix!: pulumi.Output<string>;
    public readonly validuntil!: pulumi.Output<string | undefined>;

    /**
     * Create a Acl resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AclArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AclArgs | AclState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AclState | undefined;
            resourceInputs["action"] = state ? state.action : undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["dstportfrom"] = state ? state.dstportfrom : undefined;
            resourceInputs["dstportgroup"] = state ? state.dstportgroup : undefined;
            resourceInputs["dstportto"] = state ? state.dstportto : undefined;
            resourceInputs["dstprefix"] = state ? state.dstprefix : undefined;
            resourceInputs["established"] = state ? state.established : undefined;
            resourceInputs["icmptype"] = state ? state.icmptype : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["proto"] = state ? state.proto : undefined;
            resourceInputs["reverse"] = state ? state.reverse : undefined;
            resourceInputs["srcportfrom"] = state ? state.srcportfrom : undefined;
            resourceInputs["srcportgroup"] = state ? state.srcportgroup : undefined;
            resourceInputs["srcportto"] = state ? state.srcportto : undefined;
            resourceInputs["srcprefix"] = state ? state.srcprefix : undefined;
            resourceInputs["validuntil"] = state ? state.validuntil : undefined;
        } else {
            const args = argsOrState as AclArgs | undefined;
            if ((!args || args.action === undefined) && !opts.urn) {
                throw new Error("Missing required property 'action'");
            }
            if ((!args || args.dstprefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dstprefix'");
            }
            if ((!args || args.proto === undefined) && !opts.urn) {
                throw new Error("Missing required property 'proto'");
            }
            if ((!args || args.srcprefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'srcprefix'");
            }
            resourceInputs["action"] = args ? args.action : undefined;
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["dstportfrom"] = args ? args.dstportfrom : undefined;
            resourceInputs["dstportgroup"] = args ? args.dstportgroup : undefined;
            resourceInputs["dstportto"] = args ? args.dstportto : undefined;
            resourceInputs["dstprefix"] = args ? args.dstprefix : undefined;
            resourceInputs["established"] = args ? args.established : undefined;
            resourceInputs["icmptype"] = args ? args.icmptype : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["proto"] = args ? args.proto : undefined;
            resourceInputs["reverse"] = args ? args.reverse : undefined;
            resourceInputs["srcportfrom"] = args ? args.srcportfrom : undefined;
            resourceInputs["srcportgroup"] = args ? args.srcportgroup : undefined;
            resourceInputs["srcportto"] = args ? args.srcportto : undefined;
            resourceInputs["srcprefix"] = args ? args.srcprefix : undefined;
            resourceInputs["validuntil"] = args ? args.validuntil : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Acl.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Acl resources.
 */
export interface AclState {
    /**
     * Permit or Deny forwarding of matched packets. Valid values are `permit` and `deny`.
     */
    action?: pulumi.Input<string>;
    /**
     * Descriptive comment, commonly used for approval workflows.
     */
    comment?: pulumi.Input<string>;
    /**
     * Destination port from. Valid values should be in range 1-65535
     */
    dstportfrom?: pulumi.Input<number>;
    /**
     * Match destination ports on a group of ports. Valid value name of ACL Port Group
     */
    dstportgroup?: pulumi.Input<string>;
    /**
     * Destination port to. Valid values should be in range 1-65535
     */
    dstportto?: pulumi.Input<number>;
    /**
     * Destination IPv4/IPv6 address. Example `0.0.0.0/0`
     */
    dstprefix?: pulumi.Input<string>;
    /**
     * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped
     * source/destination. Valid values are `0` and `1`. Default value is `1`
     */
    established?: pulumi.Input<number>;
    /**
     * Custom IPv4 ICMP code. Valid values should be in range 1-37 according to RFC 1700. Default value is `1`
     */
    icmptype?: pulumi.Input<number>;
    /**
     * Unique name for the ACL entry.
     */
    name?: pulumi.Input<string>;
    /**
     * IP protocol to match. Valid values are `all`, `ip`, `tcp`, `udp`, `icmp`, `icmpv6`.
     */
    proto?: pulumi.Input<string>;
    /**
     * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped
     * source/destination. Default value is `true`
     */
    reverse?: pulumi.Input<boolean>;
    /**
     * Source port from. Valid values should be in range 1-65535
     */
    srcportfrom?: pulumi.Input<number>;
    /**
     * Match source ports on a group of ports. Valid value name of ACL Port Group
     */
    srcportgroup?: pulumi.Input<string>;
    /**
     * Source port to. Valid values should be in range 1-65535
     */
    srcportto?: pulumi.Input<number>;
    /**
     * Source IPv4/IPv6 address. Example `192.0.2.0/24`
     */
    srcprefix?: pulumi.Input<string>;
    validuntil?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Acl resource.
 */
export interface AclArgs {
    /**
     * Permit or Deny forwarding of matched packets. Valid values are `permit` and `deny`.
     */
    action: pulumi.Input<string>;
    /**
     * Descriptive comment, commonly used for approval workflows.
     */
    comment?: pulumi.Input<string>;
    /**
     * Destination port from. Valid values should be in range 1-65535
     */
    dstportfrom?: pulumi.Input<number>;
    /**
     * Match destination ports on a group of ports. Valid value name of ACL Port Group
     */
    dstportgroup?: pulumi.Input<string>;
    /**
     * Destination port to. Valid values should be in range 1-65535
     */
    dstportto?: pulumi.Input<number>;
    /**
     * Destination IPv4/IPv6 address. Example `0.0.0.0/0`
     */
    dstprefix: pulumi.Input<string>;
    /**
     * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped
     * source/destination. Valid values are `0` and `1`. Default value is `1`
     */
    established?: pulumi.Input<number>;
    /**
     * Custom IPv4 ICMP code. Valid values should be in range 1-37 according to RFC 1700. Default value is `1`
     */
    icmptype?: pulumi.Input<number>;
    /**
     * Unique name for the ACL entry.
     */
    name?: pulumi.Input<string>;
    /**
     * IP protocol to match. Valid values are `all`, `ip`, `tcp`, `udp`, `icmp`, `icmpv6`.
     */
    proto: pulumi.Input<string>;
    /**
     * For TCP, also match reverse packets except with TCP SYN flag. For non-TCP, also generate a reverse rule with swapped
     * source/destination. Default value is `true`
     */
    reverse?: pulumi.Input<boolean>;
    /**
     * Source port from. Valid values should be in range 1-65535
     */
    srcportfrom?: pulumi.Input<number>;
    /**
     * Match source ports on a group of ports. Valid value name of ACL Port Group
     */
    srcportgroup?: pulumi.Input<string>;
    /**
     * Source port to. Valid values should be in range 1-65535
     */
    srcportto?: pulumi.Input<number>;
    /**
     * Source IPv4/IPv6 address. Example `192.0.2.0/24`
     */
    srcprefix: pulumi.Input<string>;
    validuntil?: pulumi.Input<string>;
}
