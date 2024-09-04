// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class RepositoryPrivileges extends pulumi.CustomResource {
    /**
     * Get an existing RepositoryPrivileges resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RepositoryPrivilegesState, opts?: pulumi.CustomResourceOptions): RepositoryPrivileges {
        return new RepositoryPrivileges(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'cloudsmith:index/repositoryPrivileges:RepositoryPrivileges';

    /**
     * Returns true if the given object is an instance of RepositoryPrivileges.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RepositoryPrivileges {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RepositoryPrivileges.__pulumiType;
    }

    /**
     * Organization to which this repository belongs.
     */
    public readonly organization!: pulumi.Output<string>;
    /**
     * Repository to which these privileges belong.
     */
    public readonly repository!: pulumi.Output<string>;
    public readonly services!: pulumi.Output<outputs.RepositoryPrivilegesService[] | undefined>;
    public readonly teams!: pulumi.Output<outputs.RepositoryPrivilegesTeam[] | undefined>;
    public readonly users!: pulumi.Output<outputs.RepositoryPrivilegesUser[] | undefined>;

    /**
     * Create a RepositoryPrivileges resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: RepositoryPrivilegesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RepositoryPrivilegesArgs | RepositoryPrivilegesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RepositoryPrivilegesState | undefined;
            resourceInputs["organization"] = state ? state.organization : undefined;
            resourceInputs["repository"] = state ? state.repository : undefined;
            resourceInputs["services"] = state ? state.services : undefined;
            resourceInputs["teams"] = state ? state.teams : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
        } else {
            const args = argsOrState as RepositoryPrivilegesArgs | undefined;
            if ((!args || args.organization === undefined) && !opts.urn) {
                throw new Error("Missing required property 'organization'");
            }
            if ((!args || args.repository === undefined) && !opts.urn) {
                throw new Error("Missing required property 'repository'");
            }
            resourceInputs["organization"] = args ? args.organization : undefined;
            resourceInputs["repository"] = args ? args.repository : undefined;
            resourceInputs["services"] = args ? args.services : undefined;
            resourceInputs["teams"] = args ? args.teams : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(RepositoryPrivileges.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering RepositoryPrivileges resources.
 */
export interface RepositoryPrivilegesState {
    /**
     * Organization to which this repository belongs.
     */
    organization?: pulumi.Input<string>;
    /**
     * Repository to which these privileges belong.
     */
    repository?: pulumi.Input<string>;
    services?: pulumi.Input<pulumi.Input<inputs.RepositoryPrivilegesService>[]>;
    teams?: pulumi.Input<pulumi.Input<inputs.RepositoryPrivilegesTeam>[]>;
    users?: pulumi.Input<pulumi.Input<inputs.RepositoryPrivilegesUser>[]>;
}

/**
 * The set of arguments for constructing a RepositoryPrivileges resource.
 */
export interface RepositoryPrivilegesArgs {
    /**
     * Organization to which this repository belongs.
     */
    organization: pulumi.Input<string>;
    /**
     * Repository to which these privileges belong.
     */
    repository: pulumi.Input<string>;
    services?: pulumi.Input<pulumi.Input<inputs.RepositoryPrivilegesService>[]>;
    teams?: pulumi.Input<pulumi.Input<inputs.RepositoryPrivilegesTeam>[]>;
    users?: pulumi.Input<pulumi.Input<inputs.RepositoryPrivilegesUser>[]>;
}
