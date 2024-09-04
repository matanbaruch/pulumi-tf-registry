// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CloudRunService extends pulumi.CustomResource {
    /**
     * Get an existing CloudRunService resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CloudRunServiceState, opts?: pulumi.CustomResourceOptions): CloudRunService {
        return new CloudRunService(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'google-beta:index/cloudRunService:CloudRunService';

    /**
     * Returns true if the given object is an instance of CloudRunService.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CloudRunService {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CloudRunService.__pulumiType;
    }

    /**
     * If set to 'true', the revision name (template.metadata.name) will be omitted and autogenerated by Cloud Run. This cannot
     * be set to 'true' while 'template.metadata.name' is also set. (For legacy support, if 'template.metadata.name' is unset
     * in state while this field is set to false, the revision name will still autogenerate.)
     */
    public readonly autogenerateRevisionName!: pulumi.Output<boolean | undefined>;
    /**
     * The location of the cloud run instance. eg us-central1
     */
    public readonly location!: pulumi.Output<string>;
    /**
     * Metadata associated with this Service, including name, namespace, labels, and annotations.
     */
    public readonly metadata!: pulumi.Output<outputs.CloudRunServiceMetadata | undefined>;
    /**
     * Name must be unique within a Google Cloud project and region. Is required when creating resources. Name is primarily
     * intended for creation idempotence and configuration definition. Cannot be updated. More info:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    public readonly name!: pulumi.Output<string>;
    public readonly project!: pulumi.Output<string>;
    /**
     * The current status of the Service.
     */
    public /*out*/ readonly statuses!: pulumi.Output<outputs.CloudRunServiceStatus[]>;
    /**
     * template holds the latest specification for the Revision to be stamped out. The template references the container image,
     * and may also include labels and annotations that should be attached to the Revision. To correlate a Revision, and/or to
     * force a Revision to be created when the spec doesn't otherwise change, a nonce label may be provided in the template
     * metadata. For more details, see:
     * https://github.com/knative/serving/blob/main/docs/client-conventions.md#associate-modifications-with-revisions Cloud Run
     * does not currently support referencing a build that is responsible for materializing the container image from source.
     */
    public readonly template!: pulumi.Output<outputs.CloudRunServiceTemplate | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.CloudRunServiceTimeouts | undefined>;
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations
     */
    public readonly traffics!: pulumi.Output<outputs.CloudRunServiceTraffic[] | undefined>;

    /**
     * Create a CloudRunService resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CloudRunServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CloudRunServiceArgs | CloudRunServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CloudRunServiceState | undefined;
            resourceInputs["autogenerateRevisionName"] = state ? state.autogenerateRevisionName : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["metadata"] = state ? state.metadata : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["project"] = state ? state.project : undefined;
            resourceInputs["statuses"] = state ? state.statuses : undefined;
            resourceInputs["template"] = state ? state.template : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["traffics"] = state ? state.traffics : undefined;
        } else {
            const args = argsOrState as CloudRunServiceArgs | undefined;
            if ((!args || args.location === undefined) && !opts.urn) {
                throw new Error("Missing required property 'location'");
            }
            resourceInputs["autogenerateRevisionName"] = args ? args.autogenerateRevisionName : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["metadata"] = args ? args.metadata : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["project"] = args ? args.project : undefined;
            resourceInputs["template"] = args ? args.template : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["traffics"] = args ? args.traffics : undefined;
            resourceInputs["statuses"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CloudRunService.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CloudRunService resources.
 */
export interface CloudRunServiceState {
    /**
     * If set to 'true', the revision name (template.metadata.name) will be omitted and autogenerated by Cloud Run. This cannot
     * be set to 'true' while 'template.metadata.name' is also set. (For legacy support, if 'template.metadata.name' is unset
     * in state while this field is set to false, the revision name will still autogenerate.)
     */
    autogenerateRevisionName?: pulumi.Input<boolean>;
    /**
     * The location of the cloud run instance. eg us-central1
     */
    location?: pulumi.Input<string>;
    /**
     * Metadata associated with this Service, including name, namespace, labels, and annotations.
     */
    metadata?: pulumi.Input<inputs.CloudRunServiceMetadata>;
    /**
     * Name must be unique within a Google Cloud project and region. Is required when creating resources. Name is primarily
     * intended for creation idempotence and configuration definition. Cannot be updated. More info:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * The current status of the Service.
     */
    statuses?: pulumi.Input<pulumi.Input<inputs.CloudRunServiceStatus>[]>;
    /**
     * template holds the latest specification for the Revision to be stamped out. The template references the container image,
     * and may also include labels and annotations that should be attached to the Revision. To correlate a Revision, and/or to
     * force a Revision to be created when the spec doesn't otherwise change, a nonce label may be provided in the template
     * metadata. For more details, see:
     * https://github.com/knative/serving/blob/main/docs/client-conventions.md#associate-modifications-with-revisions Cloud Run
     * does not currently support referencing a build that is responsible for materializing the container image from source.
     */
    template?: pulumi.Input<inputs.CloudRunServiceTemplate>;
    timeouts?: pulumi.Input<inputs.CloudRunServiceTimeouts>;
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations
     */
    traffics?: pulumi.Input<pulumi.Input<inputs.CloudRunServiceTraffic>[]>;
}

/**
 * The set of arguments for constructing a CloudRunService resource.
 */
export interface CloudRunServiceArgs {
    /**
     * If set to 'true', the revision name (template.metadata.name) will be omitted and autogenerated by Cloud Run. This cannot
     * be set to 'true' while 'template.metadata.name' is also set. (For legacy support, if 'template.metadata.name' is unset
     * in state while this field is set to false, the revision name will still autogenerate.)
     */
    autogenerateRevisionName?: pulumi.Input<boolean>;
    /**
     * The location of the cloud run instance. eg us-central1
     */
    location: pulumi.Input<string>;
    /**
     * Metadata associated with this Service, including name, namespace, labels, and annotations.
     */
    metadata?: pulumi.Input<inputs.CloudRunServiceMetadata>;
    /**
     * Name must be unique within a Google Cloud project and region. Is required when creating resources. Name is primarily
     * intended for creation idempotence and configuration definition. Cannot be updated. More info:
     * https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
     */
    name?: pulumi.Input<string>;
    project?: pulumi.Input<string>;
    /**
     * template holds the latest specification for the Revision to be stamped out. The template references the container image,
     * and may also include labels and annotations that should be attached to the Revision. To correlate a Revision, and/or to
     * force a Revision to be created when the spec doesn't otherwise change, a nonce label may be provided in the template
     * metadata. For more details, see:
     * https://github.com/knative/serving/blob/main/docs/client-conventions.md#associate-modifications-with-revisions Cloud Run
     * does not currently support referencing a build that is responsible for materializing the container image from source.
     */
    template?: pulumi.Input<inputs.CloudRunServiceTemplate>;
    timeouts?: pulumi.Input<inputs.CloudRunServiceTimeouts>;
    /**
     * Traffic specifies how to distribute traffic over a collection of Knative Revisions and Configurations
     */
    traffics?: pulumi.Input<pulumi.Input<inputs.CloudRunServiceTraffic>[]>;
}
