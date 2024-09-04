// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class DdosZoneTemplateSslL4SslTrafficCheck extends pulumi.CustomResource {
    /**
     * Get an existing DdosZoneTemplateSslL4SslTrafficCheck resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DdosZoneTemplateSslL4SslTrafficCheckState, opts?: pulumi.CustomResourceOptions): DdosZoneTemplateSslL4SslTrafficCheck {
        return new DdosZoneTemplateSslL4SslTrafficCheck(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'thunder:index/ddosZoneTemplateSslL4SslTrafficCheck:DdosZoneTemplateSslL4SslTrafficCheck';

    /**
     * Returns true if the given object is an instance of DdosZoneTemplateSslL4SslTrafficCheck.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DdosZoneTemplateSslL4SslTrafficCheck {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DdosZoneTemplateSslL4SslTrafficCheck.__pulumiType;
    }

    /**
     * Apply checks to SSL connections initialized by ACK packets
     */
    public readonly checkResumedConnection!: pulumi.Output<number | undefined>;
    /**
     * 'drop': Drop packets with bad ssl header; 'ignore': Forward packets with bad ssl header;
     */
    public readonly headerAction!: pulumi.Output<string | undefined>;
    /**
     * Inspect ssl header
     */
    public readonly headerInspection!: pulumi.Output<number | undefined>;
    /**
     * SslL4TmplName
     */
    public readonly sslL4TmplName!: pulumi.Output<string>;
    /**
     * uuid of the object
     */
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a DdosZoneTemplateSslL4SslTrafficCheck resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DdosZoneTemplateSslL4SslTrafficCheckArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DdosZoneTemplateSslL4SslTrafficCheckArgs | DdosZoneTemplateSslL4SslTrafficCheckState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DdosZoneTemplateSslL4SslTrafficCheckState | undefined;
            resourceInputs["checkResumedConnection"] = state ? state.checkResumedConnection : undefined;
            resourceInputs["headerAction"] = state ? state.headerAction : undefined;
            resourceInputs["headerInspection"] = state ? state.headerInspection : undefined;
            resourceInputs["sslL4TmplName"] = state ? state.sslL4TmplName : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as DdosZoneTemplateSslL4SslTrafficCheckArgs | undefined;
            if ((!args || args.sslL4TmplName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sslL4TmplName'");
            }
            resourceInputs["checkResumedConnection"] = args ? args.checkResumedConnection : undefined;
            resourceInputs["headerAction"] = args ? args.headerAction : undefined;
            resourceInputs["headerInspection"] = args ? args.headerInspection : undefined;
            resourceInputs["sslL4TmplName"] = args ? args.sslL4TmplName : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DdosZoneTemplateSslL4SslTrafficCheck.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DdosZoneTemplateSslL4SslTrafficCheck resources.
 */
export interface DdosZoneTemplateSslL4SslTrafficCheckState {
    /**
     * Apply checks to SSL connections initialized by ACK packets
     */
    checkResumedConnection?: pulumi.Input<number>;
    /**
     * 'drop': Drop packets with bad ssl header; 'ignore': Forward packets with bad ssl header;
     */
    headerAction?: pulumi.Input<string>;
    /**
     * Inspect ssl header
     */
    headerInspection?: pulumi.Input<number>;
    /**
     * SslL4TmplName
     */
    sslL4TmplName?: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a DdosZoneTemplateSslL4SslTrafficCheck resource.
 */
export interface DdosZoneTemplateSslL4SslTrafficCheckArgs {
    /**
     * Apply checks to SSL connections initialized by ACK packets
     */
    checkResumedConnection?: pulumi.Input<number>;
    /**
     * 'drop': Drop packets with bad ssl header; 'ignore': Forward packets with bad ssl header;
     */
    headerAction?: pulumi.Input<string>;
    /**
     * Inspect ssl header
     */
    headerInspection?: pulumi.Input<number>;
    /**
     * SslL4TmplName
     */
    sslL4TmplName: pulumi.Input<string>;
    /**
     * uuid of the object
     */
    uuid?: pulumi.Input<string>;
}
