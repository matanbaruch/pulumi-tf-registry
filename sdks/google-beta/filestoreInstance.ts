// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class FilestoreInstance extends pulumi.CustomResource {
    /**
     * Get an existing FilestoreInstance resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: FilestoreInstanceState, opts?: pulumi.CustomResourceOptions): FilestoreInstance {
        return new FilestoreInstance(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/filestoreInstance:FilestoreInstance';

    /**
     * Returns true if the given object is an instance of FilestoreInstance.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is FilestoreInstance {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === FilestoreInstance.__pulumiType;
    }

    /**
     * Creation timestamp in RFC3339 text format.
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * A description of the instance.
     */
    public readonly description!: pulumi.Output<string | undefined>;
    public /*out*/ readonly effectiveLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
     */
    public /*out*/ readonly etag!: pulumi.Output<string>;
    /**
     * File system shares on the instance. For this version, only a single file share is supported.
     */
    public readonly fileShares!: pulumi.Output<outputs.FilestoreInstanceFileShares>;
    /**
     * KMS key name used for data encryption.
     */
    public readonly kmsKeyName!: pulumi.Output<string | undefined>;
    /**
     * Resource labels to represent user-provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    public readonly labels!: pulumi.Output<{[key: string]: string} | undefined>;
    /**
     * The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * The resource name of the instance.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    public readonly networks!: pulumi.Output<outputs.FilestoreInstanceNetwork[]>;
    public readonly project!: pulumi.Output<string>;
    /**
     * Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing
     * protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value:
     * "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]
     */
    public readonly protocol!: pulumi.Output<string | undefined>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    public /*out*/ readonly terraformLabels!: pulumi.Output<{[key: string]: string}>;
    /**
     * The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD,
     * ZONAL, REGIONAL and ENTERPRISE
     */
    public readonly tier!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.FilestoreInstanceTimeouts | undefined>;
    /**
     * The name of the Filestore zone of the instance.
     *
     * @deprecated Deprecated
     */
    public readonly zone!: pulumi.Output<string>;

    /**
     * Create a FilestoreInstance resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: FilestoreInstanceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: FilestoreInstanceArgs | FilestoreInstanceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as FilestoreInstanceState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["effectiveLabels"] = state ? state.effectiveLabels : undefined;
            resourceInputs["etag"] = state ? state.etag : undefined;
            resourceInputs["fileShares"] = state ? state.fileShares : undefined;
            resourceInputs["kmsKeyName"] = state ? state.kmsKeyName : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networks"] = state ? state.networks : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["protocol"] = state ? state.protocol : undefined;
            resourceInputs["terraformLabels"] = state ? state.terraformLabels : undefined;
            resourceInputs["tier"] = state ? state.tier : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["zone"] = state ? state.zone : undefined;
        } else {
            const args = argsOrState as FilestoreInstanceArgs | undefined;
            if ((!args || args.fileShares === undefined) && !opts.urn) {
                throw new Error("Missing required property 'fileShares'");
            }
            if ((!args || args.networks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'networks'");
            }
            if ((!args || args.tier === undefined) && !opts.urn) {
                throw new Error("Missing required property 'tier'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["fileShares"] = args ? args.fileShares : undefined;
            resourceInputs["kmsKeyName"] = args ? args.kmsKeyName : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networks"] = args ? args.networks : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["protocol"] = args ? args.protocol : undefined;
            resourceInputs["tier"] = args ? args.tier : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["zone"] = args ? args.zone : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["effectiveLabels"] = undefined /*out*/;
            resourceInputs["etag"] = undefined /*out*/;
            resourceInputs["terraformLabels"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(FilestoreInstance.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering FilestoreInstance resources.
 */
export interface FilestoreInstanceState {
    /**
     * Creation timestamp in RFC3339 text format.
     */
    createTime?: pulumi.Input<string>;
    /**
     * A description of the instance.
     */
    description?: pulumi.Input<string>;
    effectiveLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * Server-specified ETag for the instance resource to prevent simultaneous updates from overwriting each other.
     */
    etag?: pulumi.Input<string>;
    /**
     * File system shares on the instance. For this version, only a single file share is supported.
     */
    fileShares?: pulumi.Input<inputs.FilestoreInstanceFileShares>;
    /**
     * KMS key name used for data encryption.
     */
    kmsKeyName?: pulumi.Input<string>;
    /**
     * Resource labels to represent user-provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the instance.
     */
    name?: pulumi.Input<string>;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks?: pulumi.Input<pulumi.Input<inputs.FilestoreInstanceNetwork>[]>;
    project?: pulumi.Input<string>;
    /**
     * Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing
     * protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value:
     * "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]
     */
    protocol?: pulumi.Input<string>;
    /**
     * The combination of labels configured directly on the resource and default labels configured on the provider.
     */
    terraformLabels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD,
     * ZONAL, REGIONAL and ENTERPRISE
     */
    tier?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FilestoreInstanceTimeouts>;
    /**
     * The name of the Filestore zone of the instance.
     *
     * @deprecated Deprecated
     */
    zone?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a FilestoreInstance resource.
 */
export interface FilestoreInstanceArgs {
    /**
     * A description of the instance.
     */
    description?: pulumi.Input<string>;
    /**
     * File system shares on the instance. For this version, only a single file share is supported.
     */
    fileShares: pulumi.Input<inputs.FilestoreInstanceFileShares>;
    /**
     * KMS key name used for data encryption.
     */
    kmsKeyName?: pulumi.Input<string>;
    /**
     * Resource labels to represent user-provided metadata. **Note**: This field is non-authoritative, and will only manage the
     * labels present in your configuration. Please refer to the field 'effective_labels' for all of the labels present on the
     * resource.
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    /**
     * The name of the location of the instance. This can be a region for ENTERPRISE tier instances.
     */
    location?: pulumi.Input<string>;
    /**
     * The resource name of the instance.
     */
    name?: pulumi.Input<string>;
    /**
     * VPC networks to which the instance is connected. For this version, only a single network is supported.
     */
    networks: pulumi.Input<pulumi.Input<inputs.FilestoreInstanceNetwork>[]>;
    project?: pulumi.Input<string>;
    /**
     * Either NFSv3, for using NFS version 3 as file sharing protocol, or NFSv4.1, for using NFS version 4.1 as file sharing
     * protocol. NFSv4.1 can be used with HIGH_SCALE_SSD, ZONAL, REGIONAL and ENTERPRISE. The default is NFSv3. Default value:
     * "NFS_V3" Possible values: ["NFS_V3", "NFS_V4_1"]
     */
    protocol?: pulumi.Input<string>;
    /**
     * The service tier of the instance. Possible values include: STANDARD, PREMIUM, BASIC_HDD, BASIC_SSD, HIGH_SCALE_SSD,
     * ZONAL, REGIONAL and ENTERPRISE
     */
    tier: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.FilestoreInstanceTimeouts>;
    /**
     * The name of the Filestore zone of the instance.
     *
     * @deprecated Deprecated
     */
    zone?: pulumi.Input<string>;
}
