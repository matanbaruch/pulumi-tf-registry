// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class MetalProject extends pulumi.CustomResource {
    /**
     * Get an existing MetalProject resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: MetalProjectState, opts?: pulumi.CustomResourceOptions): MetalProject {
        return new MetalProject(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'hpegl:index/metalProject:MetalProject';

    /**
     * Returns true if the given object is an instance of MetalProject.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is MetalProject {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === MetalProject.__pulumiType;
    }

    /**
     * Resource limits applied to this team.
     */
    public readonly limits!: pulumi.Output<outputs.MetalProjectLimits>;
    /**
     * A friendly name of the project.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * List of permitted OS service images
     */
    public readonly permittedImages!: pulumi.Output<string[] | undefined>;
    /**
     * Team profile.
     */
    public readonly profile!: pulumi.Output<outputs.MetalProjectProfile>;
    /**
     * List of Permitted Site IDs
     */
    public readonly sites!: pulumi.Output<string[] | undefined>;
    /**
     * Volume replication is enabled for the project if set.
     */
    public readonly volumeReplicationEnabled!: pulumi.Output<boolean | undefined>;

    /**
     * Create a MetalProject resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: MetalProjectArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: MetalProjectArgs | MetalProjectState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as MetalProjectState | undefined;
            resourceInputs["limits"] = state ? state.limits : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["permittedImages"] = state ? state.permittedImages : undefined;
            resourceInputs["profile"] = state ? state.profile : undefined;
            resourceInputs["sites"] = state ? state.sites : undefined;
            resourceInputs["volumeReplicationEnabled"] = state ? state.volumeReplicationEnabled : undefined;
        } else {
            const args = argsOrState as MetalProjectArgs | undefined;
            if ((!args || args.limits === undefined) && !opts.urn) {
                throw new Error("Missing required property 'limits'");
            }
            if ((!args || args.profile === undefined) && !opts.urn) {
                throw new Error("Missing required property 'profile'");
            }
            resourceInputs["limits"] = args ? args.limits : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["permittedImages"] = args ? args.permittedImages : undefined;
            resourceInputs["profile"] = args ? args.profile : undefined;
            resourceInputs["sites"] = args ? args.sites : undefined;
            resourceInputs["volumeReplicationEnabled"] = args ? args.volumeReplicationEnabled : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(MetalProject.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering MetalProject resources.
 */
export interface MetalProjectState {
    /**
     * Resource limits applied to this team.
     */
    limits?: pulumi.Input<inputs.MetalProjectLimits>;
    /**
     * A friendly name of the project.
     */
    name?: pulumi.Input<string>;
    /**
     * List of permitted OS service images
     */
    permittedImages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Team profile.
     */
    profile?: pulumi.Input<inputs.MetalProjectProfile>;
    /**
     * List of Permitted Site IDs
     */
    sites?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Volume replication is enabled for the project if set.
     */
    volumeReplicationEnabled?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a MetalProject resource.
 */
export interface MetalProjectArgs {
    /**
     * Resource limits applied to this team.
     */
    limits: pulumi.Input<inputs.MetalProjectLimits>;
    /**
     * A friendly name of the project.
     */
    name?: pulumi.Input<string>;
    /**
     * List of permitted OS service images
     */
    permittedImages?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Team profile.
     */
    profile: pulumi.Input<inputs.MetalProjectProfile>;
    /**
     * List of Permitted Site IDs
     */
    sites?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Volume replication is enabled for the project if set.
     */
    volumeReplicationEnabled?: pulumi.Input<boolean>;
}
