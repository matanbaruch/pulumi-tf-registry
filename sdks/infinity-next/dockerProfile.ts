// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DockerProfile extends pulumi.CustomResource {
    /**
     * Get an existing DockerProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DockerProfileState, opts?: pulumi.CustomResourceOptions): DockerProfile {
        return new DockerProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'infinity-next:index/dockerProfile:DockerProfile';

    /**
     * Returns true if the given object is an instance of DockerProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DockerProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DockerProfile.__pulumiType;
    }

    /**
     * Controls the settings of the connected agents
     */
    public readonly additionalSettings!: pulumi.Output<{[key: string]: string} | undefined>;
    public /*out*/ readonly additionalSettingsIds!: pulumi.Output<string[]>;
    /**
     * The token used to register an agent to the profile
     */
    public /*out*/ readonly authenticationToken!: pulumi.Output<string>;
    public readonly definedApplicationsOnly!: pulumi.Output<boolean>;
    /**
     * Sets the maximum number of agents that can be connected to this profile
     */
    public readonly maxNumberOfAgents!: pulumi.Output<number | undefined>;
    /**
     * The name of the resource, also acts as its unique ID
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly profileType!: pulumi.Output<string>;

    /**
     * Create a DockerProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: DockerProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DockerProfileArgs | DockerProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DockerProfileState | undefined;
            resourceInputs["additionalSettings"] = state ? state.additionalSettings : undefined;
            resourceInputs["additionalSettingsIds"] = state ? state.additionalSettingsIds : undefined;
            resourceInputs["authenticationToken"] = state ? state.authenticationToken : undefined;
            resourceInputs["definedApplicationsOnly"] = state ? state.definedApplicationsOnly : undefined;
            resourceInputs["maxNumberOfAgents"] = state ? state.maxNumberOfAgents : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["profileType"] = state ? state.profileType : undefined;
        } else {
            const args = argsOrState as DockerProfileArgs | undefined;
            resourceInputs["additionalSettings"] = args ? args.additionalSettings : undefined;
            resourceInputs["definedApplicationsOnly"] = args ? args.definedApplicationsOnly : undefined;
            resourceInputs["maxNumberOfAgents"] = args ? args.maxNumberOfAgents : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["additionalSettingsIds"] = undefined /*out*/;
            resourceInputs["authenticationToken"] = undefined /*out*/;
            resourceInputs["profileType"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DockerProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DockerProfile resources.
 */
export interface DockerProfileState {
    /**
     * Controls the settings of the connected agents
     */
    additionalSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    additionalSettingsIds?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The token used to register an agent to the profile
     */
    authenticationToken?: pulumi.Input<string>;
    definedApplicationsOnly?: pulumi.Input<boolean>;
    /**
     * Sets the maximum number of agents that can be connected to this profile
     */
    maxNumberOfAgents?: pulumi.Input<number>;
    /**
     * The name of the resource, also acts as its unique ID
     */
    name?: pulumi.Input<string>;
    profileType?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DockerProfile resource.
 */
export interface DockerProfileArgs {
    /**
     * Controls the settings of the connected agents
     */
    additionalSettings?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    definedApplicationsOnly?: pulumi.Input<boolean>;
    /**
     * Sets the maximum number of agents that can be connected to this profile
     */
    maxNumberOfAgents?: pulumi.Input<number>;
    /**
     * The name of the resource, also acts as its unique ID
     */
    name?: pulumi.Input<string>;
}
