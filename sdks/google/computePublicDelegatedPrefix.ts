// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ComputePublicDelegatedPrefix extends pulumi.CustomResource {
    /**
     * Get an existing ComputePublicDelegatedPrefix resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ComputePublicDelegatedPrefixState, opts?: pulumi.CustomResourceOptions): ComputePublicDelegatedPrefix {
        return new ComputePublicDelegatedPrefix(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google:index/computePublicDelegatedPrefix:ComputePublicDelegatedPrefix';

    /**
     * Returns true if the given object is an instance of ComputePublicDelegatedPrefix.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ComputePublicDelegatedPrefix {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ComputePublicDelegatedPrefix.__pulumiType;
    }

    /**
     * An optional description of this resource.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The IPv4 address range, in CIDR format, represented by this public advertised prefix.
     */
    public readonly ipCidrRange!: pulumi.Output<string>;
    /**
     * If true, the prefix will be live migrated.
     */
    public readonly isLiveMigration!: pulumi.Output<boolean | undefined>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
     */
    public readonly parentPrefix!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * A region where the prefix will reside.
     */
    public readonly region!: pulumi.Output<string>;
    public /*out*/ readonly selfLink!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ComputePublicDelegatedPrefixTimeouts | undefined>;

    /**
     * Create a ComputePublicDelegatedPrefix resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ComputePublicDelegatedPrefixArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ComputePublicDelegatedPrefixArgs | ComputePublicDelegatedPrefixState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ComputePublicDelegatedPrefixState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["ipCidrRange"] = state ? state.ipCidrRange : undefined;
            resourceInputs["isLiveMigration"] = state ? state.isLiveMigration : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["parentPrefix"] = state ? state.parentPrefix : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["selfLink"] = state ? state.selfLink : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ComputePublicDelegatedPrefixArgs | undefined;
            if ((!args || args.ipCidrRange === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ipCidrRange'");
            }
            if ((!args || args.parentPrefix === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentPrefix'");
            }
            if ((!args || args.region === undefined) && !opts.urn) {
                throw new Error("Missing required property 'region'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["ipCidrRange"] = args ? args.ipCidrRange : undefined;
            resourceInputs["isLiveMigration"] = args ? args.isLiveMigration : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["parentPrefix"] = args ? args.parentPrefix : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["selfLink"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ComputePublicDelegatedPrefix.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ComputePublicDelegatedPrefix resources.
 */
export interface ComputePublicDelegatedPrefixState {
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The IPv4 address range, in CIDR format, represented by this public advertised prefix.
     */
    ipCidrRange?: pulumi.Input<string>;
    /**
     * If true, the prefix will be live migrated.
     */
    isLiveMigration?: pulumi.Input<boolean>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    name?: pulumi.Input<string>;
    /**
     * The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
     */
    parentPrefix?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * A region where the prefix will reside.
     */
    region?: pulumi.Input<string>;
    selfLink?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputePublicDelegatedPrefixTimeouts>;
}

/**
 * The set of arguments for constructing a ComputePublicDelegatedPrefix resource.
 */
export interface ComputePublicDelegatedPrefixArgs {
    /**
     * An optional description of this resource.
     */
    description?: pulumi.Input<string>;
    /**
     * The IPv4 address range, in CIDR format, represented by this public advertised prefix.
     */
    ipCidrRange: pulumi.Input<string>;
    /**
     * If true, the prefix will be live migrated.
     */
    isLiveMigration?: pulumi.Input<boolean>;
    /**
     * Name of the resource. The name must be 1-63 characters long, and comply with RFC1035. Specifically, the name must be
     * 1-63 characters long and match the regular expression 'a-z?' which means the first character must be a lowercase letter,
     * and all following characters must be a dash, lowercase letter, or digit, except the last character, which cannot be a
     * dash.
     */
    name?: pulumi.Input<string>;
    /**
     * The URL of parent prefix. Either PublicAdvertisedPrefix or PublicDelegatedPrefix.
     */
    parentPrefix: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * A region where the prefix will reside.
     */
    region: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ComputePublicDelegatedPrefixTimeouts>;
}
