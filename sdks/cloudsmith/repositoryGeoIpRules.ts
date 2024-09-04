// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class RepositoryGeoIpRules extends pulumi.CustomResource {
    /**
     * Get an existing RepositoryGeoIpRules resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RepositoryGeoIpRulesState, opts?: pulumi.CustomResourceOptions): RepositoryGeoIpRules {
        return new RepositoryGeoIpRules(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudsmith:index/repositoryGeoIpRules:RepositoryGeoIpRules';

    /**
     * Returns true if the given object is an instance of RepositoryGeoIpRules.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RepositoryGeoIpRules {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RepositoryGeoIpRules.__pulumiType;
    }

    /**
     * The list of IP Addresses for which to allow access, expressed in CIDR notation.
     */
    public readonly cidrAllows!: pulumi.Output<string[] | undefined>;
    /**
     * The list of IP Addresses for which to deny access, expressed in CIDR notation.
     */
    public readonly cidrDenies!: pulumi.Output<string[] | undefined>;
    /**
     * The list of countries for which to allow access, expressed in ISO 3166-1 country codes.
     */
    public readonly countryCodeAllows!: pulumi.Output<string[] | undefined>;
    /**
     * The list of countries for which to deny access, expressed in ISO 3166-1 country codes.
     */
    public readonly countryCodeDenies!: pulumi.Output<string[] | undefined>;
    /**
     * Organization to which the Repository belongs.
     */
    public readonly namespace!: pulumi.Output<string>;
    /**
     * Repository to which these Geo/IP rules belong.
     */
    public readonly repository!: pulumi.Output<string>;

    /**
     * Create a RepositoryGeoIpRules resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RepositoryGeoIpRulesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RepositoryGeoIpRulesArgs | RepositoryGeoIpRulesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RepositoryGeoIpRulesState | undefined;
            resourceInputs["cidrAllows"] = state ? state.cidrAllows : undefined;
            resourceInputs["cidrDenies"] = state ? state.cidrDenies : undefined;
            resourceInputs["countryCodeAllows"] = state ? state.countryCodeAllows : undefined;
            resourceInputs["countryCodeDenies"] = state ? state.countryCodeDenies : undefined;
            resourceInputs["namespace"] = state ? state.namespace : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
        } else {
            const args = argsOrState as RepositoryGeoIpRulesArgs | undefined;
            if ((!args || args.namespace === undefined) && !opts.urn) {
                throw new Error("Missing required property 'namespace'");
            }
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            resourceInputs["cidrAllows"] = args ? args.cidrAllows : undefined;
            resourceInputs["cidrDenies"] = args ? args.cidrDenies : undefined;
            resourceInputs["countryCodeAllows"] = args ? args.countryCodeAllows : undefined;
            resourceInputs["countryCodeDenies"] = args ? args.countryCodeDenies : undefined;
            resourceInputs["namespace"] = args ? args.namespace : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RepositoryGeoIpRules.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RepositoryGeoIpRules resources.
 */
export interface RepositoryGeoIpRulesState {
    /**
     * The list of IP Addresses for which to allow access, expressed in CIDR notation.
     */
    cidrAllows?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of IP Addresses for which to deny access, expressed in CIDR notation.
     */
    cidrDenies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of countries for which to allow access, expressed in ISO 3166-1 country codes.
     */
    countryCodeAllows?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of countries for which to deny access, expressed in ISO 3166-1 country codes.
     */
    countryCodeDenies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Organization to which the Repository belongs.
     */
    namespace?: pulumi.Input<string>;
    /**
     * Repository to which these Geo/IP rules belong.
     */
    repository?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RepositoryGeoIpRules resource.
 */
export interface RepositoryGeoIpRulesArgs {
    /**
     * The list of IP Addresses for which to allow access, expressed in CIDR notation.
     */
    cidrAllows?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of IP Addresses for which to deny access, expressed in CIDR notation.
     */
    cidrDenies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of countries for which to allow access, expressed in ISO 3166-1 country codes.
     */
    countryCodeAllows?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The list of countries for which to deny access, expressed in ISO 3166-1 country codes.
     */
    countryCodeDenies?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Organization to which the Repository belongs.
     */
    namespace: pulumi.Input<string>;
    /**
     * Repository to which these Geo/IP rules belong.
     */
    repository: pulumi.Input<string>;
}
