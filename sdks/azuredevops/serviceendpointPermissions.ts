// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ServiceendpointPermissions extends pulumi.CustomResource {
    /**
     * Get an existing ServiceendpointPermissions resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceendpointPermissionsState, opts?: pulumi.CustomResourceOptions): ServiceendpointPermissions {
        return new ServiceendpointPermissions(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'azuredevops:index/serviceendpointPermissions:ServiceendpointPermissions';

    /**
     * Returns true if the given object is an instance of ServiceendpointPermissions.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ServiceendpointPermissions {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ServiceendpointPermissions.__pulumiType;
    }

    public readonly permissions!: pulumi.Output<{[key: string]: string}>;
    public readonly principal!: pulumi.Output<string>;
    public readonly projectId!: pulumi.Output<string>;
    public readonly replace!: pulumi.Output<boolean | undefined>;
    public readonly serviceendpointId!: pulumi.Output<string | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.ServiceendpointPermissionsTimeouts | undefined>;

    /**
     * Create a ServiceendpointPermissions resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceendpointPermissionsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceendpointPermissionsArgs | ServiceendpointPermissionsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceendpointPermissionsState | undefined;
            resourceInputs["permissions"] = state ? state.permissions : undefined;
            resourceInputs["principal"] = state ? state.principal : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["replace"] = state ? state.replace : undefined;
            resourceInputs["serviceendpointId"] = state ? state.serviceendpointId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ServiceendpointPermissionsArgs | undefined;
            if ((!args || args.permissions === undefined) && !opts.urn) {
                throw new Error("Missing required property 'permissions'");
            }
            if ((!args || args.principal === undefined) && !opts.urn) {
                throw new Error("Missing required property 'principal'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            resourceInputs["permissions"] = args ? args.permissions : undefined;
            resourceInputs["principal"] = args ? args.principal : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["replace"] = args ? args.replace : undefined;
            resourceInputs["serviceendpointId"] = args ? args.serviceendpointId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ServiceendpointPermissions.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ServiceendpointPermissions resources.
 */
export interface ServiceendpointPermissionsState {
    permissions?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    principal?: pulumi.Input<string>;
    projectId?: pulumi.Input<string>;
    replace?: pulumi.Input<boolean>;
    serviceendpointId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointPermissionsTimeouts>;
}

/**
 * The set of arguments for constructing a ServiceendpointPermissions resource.
 */
export interface ServiceendpointPermissionsArgs {
    permissions: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    principal: pulumi.Input<string>;
    projectId: pulumi.Input<string>;
    replace?: pulumi.Input<boolean>;
    serviceendpointId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ServiceendpointPermissionsTimeouts>;
}
