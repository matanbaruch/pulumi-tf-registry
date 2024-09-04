// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class PlatformEnvironmentGroup extends pulumi.CustomResource {
    /**
     * Get an existing PlatformEnvironmentGroup resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PlatformEnvironmentGroupState, opts?: pulumi.CustomResourceOptions): PlatformEnvironmentGroup {
        return new PlatformEnvironmentGroup(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'harness:index/platformEnvironmentGroup:PlatformEnvironmentGroup';

    /**
     * Returns true if the given object is an instance of PlatformEnvironmentGroup.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is PlatformEnvironmentGroup {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === PlatformEnvironmentGroup.__pulumiType;
    }

    /**
     * Color of the environment group.
     */
    public readonly color!: pulumi.Output<string>;
    /**
     * Enable this flag for force deletion of environment group
     */
    public readonly forceDelete!: pulumi.Output<string>;
    /**
     * identifier of the environment group.
     */
    public readonly identifier!: pulumi.Output<string>;
    /**
     * org_id of the environment group.
     */
    public readonly orgId!: pulumi.Output<string | undefined>;
    /**
     * project_id of the environment group.
     */
    public readonly projectId!: pulumi.Output<string | undefined>;
    /**
     * Env group YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the expression:
     * org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression: account.{identifier}.
     * For eg, to reference a connector with identifier 'connectorId' at the organization scope in a stage mention it as
     * connectorRef: org.connectorId.
     */
    public readonly yaml!: pulumi.Output<string>;

    /**
     * Create a PlatformEnvironmentGroup resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PlatformEnvironmentGroupArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PlatformEnvironmentGroupArgs | PlatformEnvironmentGroupState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PlatformEnvironmentGroupState | undefined;
            resourceInputs["color"] = state ? state.color : undefined;
            resourceInputs["forceDelete"] = state ? state.forceDelete : undefined;
            resourceInputs["identifier"] = state ? state.identifier : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["yaml"] = state ? state.yaml : undefined;
        } else {
            const args = argsOrState as PlatformEnvironmentGroupArgs | undefined;
            if ((!args || args.identifier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'identifier'");
            }
            if ((!args || args.yaml === undefined) && !opts.urn) {
                throw new Error("Missing required property 'yaml'");
            }
            resourceInputs["color"] = args ? args.color : undefined;
            resourceInputs["forceDelete"] = args ? args.forceDelete : undefined;
            resourceInputs["identifier"] = args ? args.identifier : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["yaml"] = args ? args.yaml : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(PlatformEnvironmentGroup.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering PlatformEnvironmentGroup resources.
 */
export interface PlatformEnvironmentGroupState {
    /**
     * Color of the environment group.
     */
    color?: pulumi.Input<string>;
    /**
     * Enable this flag for force deletion of environment group
     */
    forceDelete?: pulumi.Input<string>;
    /**
     * identifier of the environment group.
     */
    identifier?: pulumi.Input<string>;
    /**
     * org_id of the environment group.
     */
    orgId?: pulumi.Input<string>;
    /**
     * project_id of the environment group.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Env group YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the expression:
     * org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression: account.{identifier}.
     * For eg, to reference a connector with identifier 'connectorId' at the organization scope in a stage mention it as
     * connectorRef: org.connectorId.
     */
    yaml?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a PlatformEnvironmentGroup resource.
 */
export interface PlatformEnvironmentGroupArgs {
    /**
     * Color of the environment group.
     */
    color?: pulumi.Input<string>;
    /**
     * Enable this flag for force deletion of environment group
     */
    forceDelete?: pulumi.Input<string>;
    /**
     * identifier of the environment group.
     */
    identifier: pulumi.Input<string>;
    /**
     * org_id of the environment group.
     */
    orgId?: pulumi.Input<string>;
    /**
     * project_id of the environment group.
     */
    projectId?: pulumi.Input<string>;
    /**
     * Env group YAML. In YAML, to reference an entity at the organization scope, prefix 'org' to the expression:
     * org.{identifier}. To reference an entity at the account scope, prefix 'account` to the expression: account.{identifier}.
     * For eg, to reference a connector with identifier 'connectorId' at the organization scope in a stage mention it as
     * connectorRef: org.connectorId.
     */
    yaml: pulumi.Input<string>;
}
