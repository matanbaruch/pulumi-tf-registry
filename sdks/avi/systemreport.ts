// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Systemreport extends pulumi.CustomResource {
    /**
     * Get an existing Systemreport resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemreportState, opts?: pulumi.CustomResourceOptions): Systemreport {
        return new Systemreport(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'avi:index/systemreport:Systemreport';

    /**
     * Returns true if the given object is an instance of Systemreport.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Systemreport {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Systemreport.__pulumiType;
    }

    public readonly archiveRef!: pulumi.Output<string>;
    public readonly controllerPatchImageRef!: pulumi.Output<string>;
    public readonly downloadable!: pulumi.Output<string | undefined>;
    public readonly events!: pulumi.Output<outputs.SystemreportEvent[] | undefined>;
    public readonly imageRef!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly readinessReports!: pulumi.Output<outputs.SystemreportReadinessReport[] | undefined>;
    public readonly sePatchImageRef!: pulumi.Output<string>;
    public readonly states!: pulumi.Output<outputs.SystemreportState[] | undefined>;
    public readonly summaries!: pulumi.Output<outputs.SystemreportSummary[] | undefined>;
    public readonly tasks!: pulumi.Output<outputs.SystemreportTask[] | undefined>;
    public readonly tenantRef!: pulumi.Output<string>;
    public readonly uuid!: pulumi.Output<string>;

    /**
     * Create a Systemreport resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemreportArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemreportArgs | SystemreportState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemreportState | undefined;
            resourceInputs["archiveRef"] = state ? state.archiveRef : undefined;
            resourceInputs["controllerPatchImageRef"] = state ? state.controllerPatchImageRef : undefined;
            resourceInputs["downloadable"] = state ? state.downloadable : undefined;
            resourceInputs["events"] = state ? state.events : undefined;
            resourceInputs["imageRef"] = state ? state.imageRef : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["readinessReports"] = state ? state.readinessReports : undefined;
            resourceInputs["sePatchImageRef"] = state ? state.sePatchImageRef : undefined;
            resourceInputs["states"] = state ? state.states : undefined;
            resourceInputs["summaries"] = state ? state.summaries : undefined;
            resourceInputs["tasks"] = state ? state.tasks : undefined;
            resourceInputs["tenantRef"] = state ? state.tenantRef : undefined;
            resourceInputs["uuid"] = state ? state.uuid : undefined;
        } else {
            const args = argsOrState as SystemreportArgs | undefined;
            resourceInputs["archiveRef"] = args ? args.archiveRef : undefined;
            resourceInputs["controllerPatchImageRef"] = args ? args.controllerPatchImageRef : undefined;
            resourceInputs["downloadable"] = args ? args.downloadable : undefined;
            resourceInputs["events"] = args ? args.events : undefined;
            resourceInputs["imageRef"] = args ? args.imageRef : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["readinessReports"] = args ? args.readinessReports : undefined;
            resourceInputs["sePatchImageRef"] = args ? args.sePatchImageRef : undefined;
            resourceInputs["states"] = args ? args.states : undefined;
            resourceInputs["summaries"] = args ? args.summaries : undefined;
            resourceInputs["tasks"] = args ? args.tasks : undefined;
            resourceInputs["tenantRef"] = args ? args.tenantRef : undefined;
            resourceInputs["uuid"] = args ? args.uuid : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Systemreport.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Systemreport resources.
 */
export interface SystemreportState {
    archiveRef?: pulumi.Input<string>;
    controllerPatchImageRef?: pulumi.Input<string>;
    downloadable?: pulumi.Input<string>;
    events?: pulumi.Input<pulumi.Input<inputs.SystemreportEvent>[]>;
    imageRef?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    readinessReports?: pulumi.Input<pulumi.Input<inputs.SystemreportReadinessReport>[]>;
    sePatchImageRef?: pulumi.Input<string>;
    states?: pulumi.Input<pulumi.Input<inputs.SystemreportState>[]>;
    summaries?: pulumi.Input<pulumi.Input<inputs.SystemreportSummary>[]>;
    tasks?: pulumi.Input<pulumi.Input<inputs.SystemreportTask>[]>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Systemreport resource.
 */
export interface SystemreportArgs {
    archiveRef?: pulumi.Input<string>;
    controllerPatchImageRef?: pulumi.Input<string>;
    downloadable?: pulumi.Input<string>;
    events?: pulumi.Input<pulumi.Input<inputs.SystemreportEvent>[]>;
    imageRef?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    readinessReports?: pulumi.Input<pulumi.Input<inputs.SystemreportReadinessReport>[]>;
    sePatchImageRef?: pulumi.Input<string>;
    states?: pulumi.Input<pulumi.Input<inputs.SystemreportState>[]>;
    summaries?: pulumi.Input<pulumi.Input<inputs.SystemreportSummary>[]>;
    tasks?: pulumi.Input<pulumi.Input<inputs.SystemreportTask>[]>;
    tenantRef?: pulumi.Input<string>;
    uuid?: pulumi.Input<string>;
}
