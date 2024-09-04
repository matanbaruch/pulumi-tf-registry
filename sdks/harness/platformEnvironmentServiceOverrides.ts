// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PlatformEnvironmentServiceOverrides extends pulumi.CustomResource {
    /**
     * Get an existing PlatformEnvironmentServiceOverrides resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlatformEnvironmentServiceOverridesState, opts?: pulumi.CustomResourceOptions): PlatformEnvironmentServiceOverrides {
        return new PlatformEnvironmentServiceOverrides(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/platformEnvironmentServiceOverrides:PlatformEnvironmentServiceOverrides';

    /**
     * Returns true if the given object is an instance of PlatformEnvironmentServiceOverrides.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlatformEnvironmentServiceOverrides {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlatformEnvironmentServiceOverrides.__pulumiType;
    }

    /**
     * The env ID to which the overrides associated.
     */
    public readonly envId!: pulumi.Output<string>;
    /**
     * identifier of the service overrides.
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * Unique identifier of the organization.
     */
    public readonly orgId!: pulumi.Output<string | undefined>;
    /**
     * Unique identifier of the project.
     */
    public readonly projectId!: pulumi.Output<string | undefined>;
    /**
     * The service ID to which the overrides applies.
     */
    public readonly serviceId!: pulumi.Output<string>;
    /**
     * Environment Service Overrides YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the
     * expression: org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression:
     * account.{identifier}. For eg, to reference a connector with identifier 'connectorId' at the organization scope in a
     * stage mention it as connectorRef: org.connectorId.
     */
    public readonly yaml!: pulumi.Output<string>;

    /**
     * Create a PlatformEnvironmentServiceOverrides resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlatformEnvironmentServiceOverridesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlatformEnvironmentServiceOverridesArgs | PlatformEnvironmentServiceOverridesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlatformEnvironmentServiceOverridesState | undefined;
            resourceInputs["envId"] = state ? state.envId : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
            resourceInputs["yaml"] = state ? state.yaml : undefined;
        } else {
            const args = argsOrState as PlatformEnvironmentServiceOverridesArgs | undefined;
            if ((!args || args.envId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'envId'");
            }
            if ((!args || args.serviceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceId'");
            }
            if ((!args || args.yaml === undefined) && !opts.urn) {
                throw new Error("Missing required property 'yaml'");
            }
            resourceInputs["envId"] = args ? args.envId : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["serviceId"] = args ? args.serviceId : undefined;
            resourceInputs["yaml"] = args ? args.yaml : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlatformEnvironmentServiceOverrides.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PlatformEnvironmentServiceOverrides resources.
 */
export interface PlatformEnvironmentServiceOverridesState {
    /**
     * The env ID to which the overrides associated.
     */
    envId?: pulumi.Input<string>;
    /**
     * identifier of the service overrides.
     */
    identifier?: pulumi.Input<string>;
    /**
     * Unique identifier of the organization.
     */
    orgId?: pulumi.Input<string>;
    /**
     * Unique identifier of the project.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The service ID to which the overrides applies.
     */
    serviceId?: pulumi.Input<string>;
    /**
     * Environment Service Overrides YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the
     * expression: org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression:
     * account.{identifier}. For eg, to reference a connector with identifier 'connectorId' at the organization scope in a
     * stage mention it as connectorRef: org.connectorId.
     */
    yaml?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PlatformEnvironmentServiceOverrides resource.
 */
export interface PlatformEnvironmentServiceOverridesArgs {
    /**
     * The env ID to which the overrides associated.
     */
    envId: pulumi.Input<string>;
    /**
     * identifier of the service overrides.
     */
    identifier?: pulumi.Input<string>;
    /**
     * Unique identifier of the organization.
     */
    orgId?: pulumi.Input<string>;
    /**
     * Unique identifier of the project.
     */
    projectId?: pulumi.Input<string>;
    /**
     * The service ID to which the overrides applies.
     */
    serviceId: pulumi.Input<string>;
    /**
     * Environment Service Overrides YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the
     * expression: org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression:
     * account.{identifier}. For eg, to reference a connector with identifier 'connectorId' at the organization scope in a
     * stage mention it as connectorRef: org.connectorId.
     */
    yaml: pulumi.Input<string>;
}
