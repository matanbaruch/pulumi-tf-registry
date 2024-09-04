// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputePublicAdvertisedPrefix extends pulumi.CustomResource {
    /**
     * Get an existing ComputePublicAdvertisedPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputePublicAdvertisedPrefixState, opts?: pulumi.CustomResourceOptions): ComputePublicAdvertisedPrefix {
        return new ComputePublicAdvertisedPrefix(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/computePublicAdvertisedPrefix:ComputePublicAdvertisedPrefix';

    /**
     * Returns true if the given object is an instance of ComputePublicAdvertisedPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputePublicAdvertisedPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputePublicAdvertisedPrefix.__pulumiType;
    }

    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The IPv4 address to be used for reverse DNS verification.
     */
    public readonly dnsVerificationIp!: pulumi.Output<string>;
    /**
     * The IPv4 address range, in CIDR format, represented by this public advertised prefix.
     */
    public readonly ipCidrRange!: pulumi.Output<string>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    /**
     * Output Only. The shared secret to be used for reverse DNS verification.
     */
    public /*out*/ readonly sharedSecret!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputePublicAdvertisedPrefixTimeouts | undefined>;

    /**
     * Create a ComputePublicAdvertisedPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputePublicAdvertisedPrefixArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputePublicAdvertisedPrefixArgs | ComputePublicAdvertisedPrefixState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputePublicAdvertisedPrefixState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["dnsVerificationIp"] = state ? state.dnsVerificationIp : undefined;
            resourceInputs["ipCidrRange"] = state ? state.ipCidrRange : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["sharedSecret"] = state ? state.sharedSecret : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputePublicAdvertisedPrefixArgs | undefined;
            if ((!args || args.dnsVerificationIp === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dnsVerificationIp'");
            }
            if ((!args || args.ipCidrRange === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipCidrRange'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["dnsVerificationIp"] = args ? args.dnsVerificationIp : undefined;
            resourceInputs["ipCidrRange"] = args ? args.ipCidrRange : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["selfLink"] = undefined /*out*/;
            resourceInputs["sharedSecret"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputePublicAdvertisedPrefix.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputePublicAdvertisedPrefix resources.
 */
export interface ComputePublicAdvertisedPrefixState {
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The IPv4 address to be used for reverse DNS verification.
     */
    dnsVerificationIp?: pulumi.Input<string>;
    /**
     * The IPv4 address range, in CIDR format, represented by this public advertised prefix.
     */
    ipCidrRange?: pulumi.Input<string>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    /**
     * Output Only. The shared secret to be used for reverse DNS verification.
     */
    sharedSecret?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputePublicAdvertisedPrefixTimeouts>;
}

/**
 * The set of arguments for constructing a ComputePublicAdvertisedPrefix resource.
 */
export interface ComputePublicAdvertisedPrefixArgs {
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The IPv4 address to be used for reverse DNS verification.
     */
    dnsVerificationIp: pulumi.Input<string>;
    /**
     * The IPv4 address range, in CIDR format, represented by this public advertised prefix.
     */
    ipCidrRange: pulumi.Input<string>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputePublicAdvertisedPrefixTimeouts>;
}
