// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class GpdbExternalDataService extends pulumi.CustomResource {
    /**
     * Get an existing GpdbExternalDataService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: GpdbExternalDataServiceState, opts?: pulumi.CustomResourceOptions): GpdbExternalDataService {
        return new GpdbExternalDataService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'alicloud:index/gpdbExternalDataService:GpdbExternalDataService';

    /**
     * Returns true if the given object is an instance of GpdbExternalDataService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is GpdbExternalDataService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === GpdbExternalDataService.__pulumiType;
    }

    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly dbInstanceId!: pulumi.Output<string>;
    public readonly serviceDescription!: pulumi.Output<string | undefined>;
    public /*out*/ readonly serviceId!: pulumi.Output<number>;
    public readonly serviceName!: pulumi.Output<string>;
    public readonly serviceSpec!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.GpdbExternalDataServiceTimeouts | undefined>;

    /**
     * Create a GpdbExternalDataService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: GpdbExternalDataServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: GpdbExternalDataServiceArgs | GpdbExternalDataServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as GpdbExternalDataServiceState | undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["dbInstanceId"] = state ? state.dbInstanceId : undefined;
            resourceInputs["serviceDescription"] = state ? state.serviceDescription : undefined;
            resourceInputs["serviceId"] = state ? state.serviceId : undefined;
            resourceInputs["serviceName"] = state ? state.serviceName : undefined;
            resourceInputs["serviceSpec"] = state ? state.serviceSpec : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
        } else {
            const args = argsOrState as GpdbExternalDataServiceArgs | undefined;
            if ((!args || args.dbInstanceId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'dbInstanceId'");
            }
            if ((!args || args.serviceName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceName'");
            }
            if ((!args || args.serviceSpec === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceSpec'");
            }
            resourceInputs["dbInstanceId"] = args ? args.dbInstanceId : undefined;
            resourceInputs["serviceDescription"] = args ? args.serviceDescription : undefined;
            resourceInputs["serviceName"] = args ? args.serviceName : undefined;
            resourceInputs["serviceSpec"] = args ? args.serviceSpec : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["serviceId"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(GpdbExternalDataService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering GpdbExternalDataService resources.
 */
export interface GpdbExternalDataServiceState {
    createTime?: pulumi.Input<string>;
    dbInstanceId?: pulumi.Input<string>;
    serviceDescription?: pulumi.Input<string>;
    serviceId?: pulumi.Input<number>;
    serviceName?: pulumi.Input<string>;
    serviceSpec?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GpdbExternalDataServiceTimeouts>;
}

/**
 * The set of arguments for constructing a GpdbExternalDataService resource.
 */
export interface GpdbExternalDataServiceArgs {
    dbInstanceId: pulumi.Input<string>;
    serviceDescription?: pulumi.Input<string>;
    serviceName: pulumi.Input<string>;
    serviceSpec: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.GpdbExternalDataServiceTimeouts>;
}
