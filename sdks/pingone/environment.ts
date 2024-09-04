// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Environment extends pulumi.CustomResource {
    /**
     * Get an existing Environment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EnvironmentState, opts?: pulumi.CustomResourceOptions): Environment {
        return new Environment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingone:index/environment:Environment';

    /**
     * Returns true if the given object is an instance of Environment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Environment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Environment.__pulumiType;
    }

    /**
     * A string that specifies the description to apply to the environment.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * A string that specifies the ID of a valid license to apply to the environment. Must be a valid PingOne resource ID.
     */
    public readonly licenseId!: pulumi.Output<string>;
    /**
     * A string that specifies the name of the environment.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A string that represents the ID of the PingOne organization tenant to which the environment belongs.
     */
    public /*out*/ readonly organizationId!: pulumi.Output<string>;
    /**
     * A string that specifies the region to create the environment in. Should be consistent with the PingOne organisation
     * region. Options are `AP`, `AU`, `CA`, `EU`, `NA`. Will default to the region specified in the provider configuration if
     * not specified, or can be set with the `PINGONE_REGION_CODE` environment variable.
     */
    public readonly region!: pulumi.Output<string>;
    /**
     * A set of objects that specify the services to enable in the environment.
     */
    public readonly services!: pulumi.Output<outputs.EnvironmentService[]>;
    /**
     * A string that specifies the solution context of the environment. Leave undefined for a custom, non-workforce solution
     * context. Options are `CIAM_TRIAL`, `CUSTOMER`. This field is immutable and will trigger a replace plan if changed.
     */
    public readonly solution!: pulumi.Output<string | undefined>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Environment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EnvironmentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EnvironmentArgs | EnvironmentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EnvironmentState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["licenseId"] = state ? state.licenseId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["organizationId"] = state ? state.organizationId : undefined;
            resourceInputs["region"] = state ? state.region : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["solution"] = state ? state.solution : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as EnvironmentArgs | undefined;
            if ((!args || args.licenseId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'licenseId'");
            }
            if ((!args || args.services === undefined) && !opts.urn) {
                throw new Error("Missing required property 'services'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["licenseId"] = args ? args.licenseId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["region"] = args ? args.region : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["solution"] = args ? args.solution : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["organizationId"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Environment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Environment resources.
 */
export interface EnvironmentState {
    /**
     * A string that specifies the description to apply to the environment.
     */
    description?: pulumi.Input<string>;
    /**
     * A string that specifies the ID of a valid license to apply to the environment. Must be a valid PingOne resource ID.
     */
    licenseId?: pulumi.Input<string>;
    /**
     * A string that specifies the name of the environment.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that represents the ID of the PingOne organization tenant to which the environment belongs.
     */
    organizationId?: pulumi.Input<string>;
    /**
     * A string that specifies the region to create the environment in. Should be consistent with the PingOne organisation
     * region. Options are `AP`, `AU`, `CA`, `EU`, `NA`. Will default to the region specified in the provider configuration if
     * not specified, or can be set with the `PINGONE_REGION_CODE` environment variable.
     */
    region?: pulumi.Input<string>;
    /**
     * A set of objects that specify the services to enable in the environment.
     */
    services?: pulumi.Input<pulumi.Input<inputs.EnvironmentService>[]>;
    /**
     * A string that specifies the solution context of the environment. Leave undefined for a custom, non-workforce solution
     * context. Options are `CIAM_TRIAL`, `CUSTOMER`. This field is immutable and will trigger a replace plan if changed.
     */
    solution?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Environment resource.
 */
export interface EnvironmentArgs {
    /**
     * A string that specifies the description to apply to the environment.
     */
    description?: pulumi.Input<string>;
    /**
     * A string that specifies the ID of a valid license to apply to the environment. Must be a valid PingOne resource ID.
     */
    licenseId: pulumi.Input<string>;
    /**
     * A string that specifies the name of the environment.
     */
    name?: pulumi.Input<string>;
    /**
     * A string that specifies the region to create the environment in. Should be consistent with the PingOne organisation
     * region. Options are `AP`, `AU`, `CA`, `EU`, `NA`. Will default to the region specified in the provider configuration if
     * not specified, or can be set with the `PINGONE_REGION_CODE` environment variable.
     */
    region?: pulumi.Input<string>;
    /**
     * A set of objects that specify the services to enable in the environment.
     */
    services: pulumi.Input<pulumi.Input<inputs.EnvironmentService>[]>;
    /**
     * A string that specifies the solution context of the environment. Leave undefined for a custom, non-workforce solution
     * context. Options are `CIAM_TRIAL`, `CUSTOMER`. This field is immutable and will trigger a replace plan if changed.
     */
    solution?: pulumi.Input<string>;
    type?: pulumi.Input<string>;
}
