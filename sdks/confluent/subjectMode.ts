// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class SubjectMode extends pulumi.CustomResource {
    /**
     * Get an existing SubjectMode resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SubjectModeState, opts?: pulumi.CustomResourceOptions): SubjectMode {
        return new SubjectMode(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'confluent:index/subjectMode:SubjectMode';

    /**
     * Returns true if the given object is an instance of SubjectMode.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SubjectMode {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SubjectMode.__pulumiType;
    }

    /**
     * The Cluster API Credentials.
     */
    public readonly credentials!: pulumi.Output<outputs.SubjectModeCredentials | undefined>;
    public readonly mode!: pulumi.Output<string>;
    /**
     * The REST endpoint of the Schema Registry cluster, for example,
     * `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
     */
    public readonly restEndpoint!: pulumi.Output<string | undefined>;
    public readonly schemaRegistryCluster!: pulumi.Output<outputs.SubjectModeSchemaRegistryCluster | undefined>;
    /**
     * The name of the Schema Registry Subject.
     */
    public readonly subjectName!: pulumi.Output<string>;

    /**
     * Create a SubjectMode resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SubjectModeArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SubjectModeArgs | SubjectModeState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SubjectModeState | undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["mode"] = state ? state.mode : undefined;
            resourceInputs["restEndpoint"] = state ? state.restEndpoint : undefined;
            resourceInputs["schemaRegistryCluster"] = state ? state.schemaRegistryCluster : undefined;
            resourceInputs["subjectName"] = state ? state.subjectName : undefined;
        } else {
            const args = argsOrState as SubjectModeArgs | undefined;
            if ((!args || args.subjectName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subjectName'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["mode"] = args ? args.mode : undefined;
            resourceInputs["restEndpoint"] = args ? args.restEndpoint : undefined;
            resourceInputs["schemaRegistryCluster"] = args ? args.schemaRegistryCluster : undefined;
            resourceInputs["subjectName"] = args ? args.subjectName : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SubjectMode.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SubjectMode resources.
 */
export interface SubjectModeState {
    /**
     * The Cluster API Credentials.
     */
    credentials?: pulumi.Input<inputs.SubjectModeCredentials>;
    mode?: pulumi.Input<string>;
    /**
     * The REST endpoint of the Schema Registry cluster, for example,
     * `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
     */
    restEndpoint?: pulumi.Input<string>;
    schemaRegistryCluster?: pulumi.Input<inputs.SubjectModeSchemaRegistryCluster>;
    /**
     * The name of the Schema Registry Subject.
     */
    subjectName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SubjectMode resource.
 */
export interface SubjectModeArgs {
    /**
     * The Cluster API Credentials.
     */
    credentials?: pulumi.Input<inputs.SubjectModeCredentials>;
    mode?: pulumi.Input<string>;
    /**
     * The REST endpoint of the Schema Registry cluster, for example,
     * `https://psrc-00000.us-central1.gcp.confluent.cloud:443`).
     */
    restEndpoint?: pulumi.Input<string>;
    schemaRegistryCluster?: pulumi.Input<inputs.SubjectModeSchemaRegistryCluster>;
    /**
     * The name of the Schema Registry Subject.
     */
    subjectName: pulumi.Input<string>;
}
