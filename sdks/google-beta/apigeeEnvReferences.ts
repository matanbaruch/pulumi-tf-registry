// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ApigeeEnvReferences extends pulumi.CustomResource {
    /**
     * Get an existing ApigeeEnvReferences resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApigeeEnvReferencesState, opts?: pulumi.CustomResourceOptions): ApigeeEnvReferences {
        return new ApigeeEnvReferences(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/apigeeEnvReferences:ApigeeEnvReferences';

    /**
     * Returns true if the given object is an instance of ApigeeEnvReferences.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApigeeEnvReferences {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApigeeEnvReferences.__pulumiType;
    }

    /**
     * Optional. A human-readable description of this reference.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/environments/{{env_name}}'.
     */
    public readonly envId!: pulumi.Output<string>;
    /**
     * Required. The resource id of this reference. Values must match the regular expression [\w\s-.]+.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent
     * environment and is of the given resourceType.
     */
    public readonly refers!: pulumi.Output<string>;
    /**
     * The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
     */
    public readonly resourceType!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.ApigeeEnvReferencesTimeouts | undefined>;

    /**
     * Create a ApigeeEnvReferences resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApigeeEnvReferencesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApigeeEnvReferencesArgs | ApigeeEnvReferencesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApigeeEnvReferencesState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["envId"] = state ? state.envId : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["refers"] = state ? state.refers : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as ApigeeEnvReferencesArgs | undefined;
            if ((!args || args.envId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'envId'");
            }
            if ((!args || args.refers === undefined) && !opts.urn) {
                throw new Error("Missing required property 'refers'");
            }
            if ((!args || args.resourceType === undefined) && !opts.urn) {
                throw new Error("Missing required property 'resourceType'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["envId"] = args ? args.envId : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["refers"] = args ? args.refers : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApigeeEnvReferences.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApigeeEnvReferences resources.
 */
export interface ApigeeEnvReferencesState {
    /**
     * Optional. A human-readable description of this reference.
     */
    description?: pulumi.Input<string>;
    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/environments/{{env_name}}'.
     */
    envId?: pulumi.Input<string>;
    /**
     * Required. The resource id of this reference. Values must match the regular expression [\w\s-.]+.
     */
    name?: pulumi.Input<string>;
    /**
     * Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent
     * environment and is of the given resourceType.
     */
    refers?: pulumi.Input<string>;
    /**
     * The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
     */
    resourceType?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeEnvReferencesTimeouts>;
}

/**
 * The set of arguments for constructing a ApigeeEnvReferences resource.
 */
export interface ApigeeEnvReferencesArgs {
    /**
     * Optional. A human-readable description of this reference.
     */
    description?: pulumi.Input<string>;
    /**
     * The Apigee environment group associated with the Apigee environment, in the format
     * 'organizations/{{org_name}}/environments/{{env_name}}'.
     */
    envId: pulumi.Input<string>;
    /**
     * Required. The resource id of this reference. Values must match the regular expression [\w\s-.]+.
     */
    name?: pulumi.Input<string>;
    /**
     * Required. The id of the resource to which this reference refers. Must be the id of a resource that exists in the parent
     * environment and is of the given resourceType.
     */
    refers: pulumi.Input<string>;
    /**
     * The type of resource referred to by this reference. Valid values are 'KeyStore' or 'TrustStore'.
     */
    resourceType: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.ApigeeEnvReferencesTimeouts>;
}
